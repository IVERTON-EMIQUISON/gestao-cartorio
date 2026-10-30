import { ShieldCheck, Lock, FileSearch, DatabaseBackup, Fingerprint, Scale } from 'lucide-react'

const pilares = [
  {
    icon: ShieldCheck,
    title: 'Provimento 74/CNJ',
    text: 'Requisitos de segurança, guarda e backup de documentos eletrônicos atendidos integralmente, conforme as regras da Corregedoria.',
  },
  {
    icon: Lock,
    title: 'LGPD desde a origem',
    text: 'Dados de cidadãos tratados com base legal registrada, finalidade definida e acesso restrito a quem tem atribuição para o ato.',
  },
  {
    icon: Fingerprint,
    title: 'Certificado ICP-Brasil',
    text: 'Todo ato eletrônico é assinado com certificado digital padrão ICP-Brasil, com validade jurídica plena.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backup em nuvem',
    text: 'Cópias redundantes em servidores seguros, com rotina de verificação diária e guarda fora da sede.',
  },
  {
    icon: FileSearch,
    title: 'Auditoria e trilha de acesso',
    text: 'Cada consulta, emissão e alteração fica registrada com usuário, data e hora — rastreável a qualquer momento.',
  },
  {
    icon: Scale,
    title: 'Fiscalização do TJRN',
    text: 'Serventia regular, inspecionada pela Corregedoria-Geral de Justiça e sujeita às normas do Conselho Nacional de Justiça.',
  },
]

export default function Seguranca() {
  return (
    <section id="seguranca" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(176,131,71,.18),transparent_65%)]" />
      <div className="wrap relative py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light">Conformidade e segurança</p>
          <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight sm:text-[2.5rem]">
            Fé pública exige mais do que boa vontade
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">
            Um documento de cartório precisa durar gerações. Por isso a serventia opera dentro dos
            requisitos do CNJ, da LGPD e das normas técnicas de segurança da informação — com
            verificação independente e trilha de auditoria completa.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((pilar) => {
            const Icon = pilar.icon
            return (
              <div key={pilar.title} className="bg-ink p-7 transition hover:bg-ink-800">
                <Icon className="h-5 w-5 text-brass" strokeWidth={1.8} />
                <h3 className="mt-4 text-[15px] font-semibold text-paper">{pilar.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-paper/55">{pilar.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/40">
          <span>Provimento 74/CNJ</span>
          <span className="h-1 w-1 rounded-full bg-brass/60" />
          <span>Lei 13.709/2018 — LGPD</span>
          <span className="h-1 w-1 rounded-full bg-brass/60" />
          <span>MP 2.200-2/2001 — ICP-Brasil</span>
          <span className="h-1 w-1 rounded-full bg-brass/60" />
          <span>ABNT NBR ISO/IEC 27002</span>
        </div>
      </div>
    </section>
  )
}
