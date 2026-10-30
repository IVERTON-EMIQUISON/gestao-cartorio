import { Phone, MapPin } from 'lucide-react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Integrações', href: '#integracoes' },
  { label: 'Atendimento', href: '#atendimento' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <a href="#topo" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/50 bg-ink font-display text-sm font-semibold tracking-wide text-brass-light">
            CÚ
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold text-ink">Cartório Único</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-ink/50">Itaú · Rio Grande do Norte</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 text-xs font-medium text-ink/55 xl:flex">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
            Centro · Itaú/RN
          </span>
          <a href="#contato" className="btn-primary !px-5 !py-2.5 text-[13px]">
            <Phone className="h-3.5 w-3.5" strokeWidth={2} />
            Falar com o cartório
          </a>
        </div>
      </div>
    </header>
  )
}
