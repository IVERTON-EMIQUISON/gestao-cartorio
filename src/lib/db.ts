import type { Entity, EntityClient, ListOptions, PaginationData } from '@lumi.new/sdk'
import { LumiError } from '@lumi.new/sdk'
import { lumi } from '@/lib/lumi'
import { useCallback, useEffect, useRef, useState } from 'react'

export function entity<T extends Entity>(name: string): EntityClient<T> {
  return lumi.entity<T>(name)
}

// Server error codes: 2100 not signed in, 2205 insufficient permission, 2206 collection has no permission config, 2207 record not found
export function errorMessage(error: unknown, fallback = 'Something went wrong, please try again'): string {
  if (error instanceof LumiError)
    return `${error.message} (${error.code})`
  return error instanceof Error && error.message ? error.message : fallback
}

interface QueryState<T> {
  data: T | undefined
  loading: boolean
  error: string
  refresh: () => void
}

// Serialized key as the effect dependency, so inline objects do not trigger refetch loops
export function useQuery<T>(key: unknown[], fetcher: () => Promise<T>): QueryState<T> {
  const keyString = JSON.stringify(key)
  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher
  const [data, setData] = useState<T | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [version, setVersion] = useState(0)
  const refresh = useCallback(() => setVersion(v => v + 1), [])

  useEffect(() => {
    let active = true
    setLoading(true)
    setError('')
    fetcherRef.current()
      .then((result) => {
        if (active) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (active) {
          setError(errorMessage(err))
          setLoading(false)
        }
      })
    return () => {
      active = false
    }
  }, [keyString, version])

  return { data, loading, error, refresh }
}

export function useList<T extends Entity>(collection: string, options: ListOptions = {}): QueryState<PaginationData<T>> {
  return useQuery([collection, 'list', options], () => entity<T>(collection).list(options))
}

export function useRecord<T extends Entity>(collection: string, id: string | undefined): QueryState<T | null> {
  return useQuery([collection, 'get', id], () => (id ? entity<T>(collection).get(id) : Promise.resolve(null)))
}

export function useCount(collection: string, filter?: Record<string, unknown>): QueryState<number> {
  return useQuery([collection, 'count', filter], () => entity(collection).count(filter))
}

export function useAggregate<R = Record<string, unknown>>(collection: string, pipeline: Record<string, unknown>[]): QueryState<R[]> {
  return useQuery([collection, 'aggregate', pipeline], () => entity(collection).aggregate<R>(pipeline))
}
