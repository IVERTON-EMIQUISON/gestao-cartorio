const integracoes = [
  { sigla: 'e-Notariado', desc: 'Atos notariais eletrônicos e videoconferência' },
  { sigla: 'ONR', desc: 'Operador Nacional do Sistema de Registro de Imóveis' },
  { sigla: 'SINTER', desc: 'Interligação dos registros de imóveis' },
  { sigla: 'CNIB', desc: 'Central Nacional de Indisponibilidade de Bens' },
  { sigla: 'CRC Nacional', desc: 'Central de Informações do Registro Civil' },
  { sigla: 'SERP', desc: 'Sistema Eletrônico dos Registros Públicos' },
  { sigla: 'PJe / TJRN', desc: 'Selo digital e fiscalização do tribunal' },
  { sigla: 'CCN', desc: 'Central Nacional de Protestos — CENPROT' },
]

export default function Integracoes() {
  return (
    <section id="integracoes" className="border-y border-ink/10 bg-sand/60">
      <div className="wrap py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Integrações nacionais</p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.4rem]">
              Conectado a quem importa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Os atos da serventia circulam nas centrais oficiais. Isso significa certidão aceita em
              outro estado, protesto encontrado na hora e indisponibilidade verificada antes de
              qualquer escritura.
            </p>
            <a href="#contato" className="btn-ghost mt-7">Tirar dúvida sobre um ato</a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {integracoes.map(item => (
                <div
                  key={item.sigla}
                  className="flex items-center gap-4 rounded-xl border border-ink/10 bg-paper px-4 py-3.5"
                >
                  <span className="flex h-9 shrink-0 items-center rounded-md bg-ink px-2.5 font-display text-[11px] font-semibold tracking-wide text-brass-light">
                    {item.sigla.split(' ')[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold text-ink">{item.sigla}</p>
                    <p className="truncate text-[11.5px] text-ink/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11.5px] leading-relaxed text-ink/40">
              Integrações operadas pelos sistemas oficiais dos registros públicos. A disponibilidade
              de cada serviço depende dos provedores nacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
