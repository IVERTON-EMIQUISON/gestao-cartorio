import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react'

const BUILDING = 'https://static.lumi.new/85/8566e15b2a1e9beed49598426a8f0db7.webp'

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sand" />
      <div className="wrap relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-dark">
            <span className="h-px w-8 bg-brass" />
            Ofício Único de Itaú · RN
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.01em] text-ink sm:text-[3.4rem]">
            O ato que você assina aqui
            <span className="block text-brass-dark">vale a vida inteira.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/65">
            Escrituras, registros de imóveis, nascimentos, casamentos, protestos e reconhecimento
            de firmas — com fé pública, prazo cumprido e o cuidado de quem conhece cada família
            desta comarca.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contato" className="btn-primary">
              Agendar atendimento
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver todos os serviços
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-7">
            {[
              { label: '+10 anos' },
            ].map(item => (
              <div key={item.label}>
                
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[26px] border border-brass/40 sm:block" />
          <div className="relative overflow-hidden rounded-[26px] bg-ink shadow-card">
            <img
              src={BUILDING}
              alt="Fachada do Cartório Único de Itaú"
              className="h-[380px] w-full object-cover object-center sm:h-[440px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 pt-16">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-light">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                Sede própria · Centro de Itaú/RN
              </p>
              <p className="mt-2 font-display text-lg text-paper">
                Atendimento presencial, por telefone e por e-mail.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-card sm:-left-8 sm:right-8">
            <span className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 text-brass-dark" strokeWidth={2} />
              Provimento 74/CNJ · LGPD
            </span>
            <span className="flex items-center gap-2 text-xs font-medium text-ink/60">
              <Clock className="h-4 w-4" strokeWidth={1.8} />
              Seg. a sex., 8h às 17h
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
