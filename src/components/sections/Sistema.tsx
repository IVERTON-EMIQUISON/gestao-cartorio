import { QrCode, BadgeCheck, Wallet, Search, Bell, FileDigit } from 'lucide-react'

const recursos = [
  {
    icon: BadgeCheck,
    title: 'Selo digital automático',
    text: 'Cada ato recebe o selo de fiscalização gerado e validado junto ao tribunal do estado no momento da lavratura.',
    tag: 'Selo Digital',
  },
  {
    icon: FileDigit,
    title: 'Assinatura com ICP-Brasil',
    text: 'Assinatura digital de escrituras e certidões com certificado e-CPF, e-CNPJ ou token do tabelião.',
    tag: 'ICP-Brasil',
  },
  {
    icon: Wallet,
    title: 'Emolumentos e guias',
    text: 'Cálculo pela tabela vigente, emissão de guia e pagamento por PIX ou boleto, com recibo na hora.',
    tag: 'Financeiro',
  },
  {
    icon: Search,
    title: 'Consulta de protocolo',
    text: 'Acompanhe o andamento do seu ato pelo número de protocolo, sem precisar ligar para o cartório.',
    tag: 'Acompanhamento',
  },
  {
    icon: QrCode,
    title: 'Certidão com QR Code',
    text: 'Certidões emitidas com código de verificação que confirma a autenticidade em segundos.',
    tag: 'Certidões',
  },
  {
    icon: Bell,
    title: 'Avisos de prazo',
    text: 'Intimações de protesto e prazos de diligência comunicados por e-mail e WhatsApp cadastrados.',
    tag: 'Comunicação',
  },
]

export default function Sistema() {
  return (
    <section className="bg-paper">
      <div className="wrap py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Serviços digitais</p>
            <h2 className="mt-3 max-w-xl font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
              O cartório funcionando com precisão de sistema
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            A serventia opera em plataforma integrada aos sistemas nacionais: menos papel, menos
            retrabalho e prazos controlados ato por ato.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recursos.map((recurso) => {
            const Icon = recurso.icon
            return (
              <article
                key={recurso.title}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white/60 p-6 transition hover:-translate-y-0.5 hover:border-brass/50 hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sand text-brass-dark transition group-hover:bg-ink group-hover:text-brass-light">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                    {recurso.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold text-ink">{recurso.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{recurso.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
