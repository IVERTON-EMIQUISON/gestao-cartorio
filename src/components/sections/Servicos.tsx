import { useState } from 'react'
import { Building2, FileSignature, Baby, Gavel, Landmark, Check } from 'lucide-react'

const servicos = [
  {
    id: 'notas',
    icon: FileSignature,
    tab: 'Notas',
    title: 'Tabelionato de Notas',
    resumo: 'Escrituras, procurações e testamentos lavrados com orientação clara antes da assinatura.',
    atos: ['Escrituras de compra e venda, doação e inventário', 'Procurações públicas e substabelecimentos', 'Testamentos públicos e aprovação de testamento cerrado', 'Ata notarial e reconhecimento de firma por autenticidade ou semelhança', 'Autenticação de cópias e cartão de firma'],
  },
  {
    id: 'imoveis',
    icon: Building2,
    tab: 'Imóveis',
    title: 'Registro de Imóveis',
    resumo: 'Matrícula, averbações e transferências com análise completa da documentação do imóvel.',
    atos: ['Registro de compra e venda, doação e permuta', 'Averbação de construção, demolição e georreferenciamento', 'Hipoteca, alienação fiduciária e garantias', 'Retificação de área e unificação de matrículas', 'Certidões de ônus, ações reais e inteiro teor'],
  },
  {
    id: 'civil',
    icon: Baby,
    tab: 'Registro Civil',
    title: 'Registro Civil das Pessoas Naturais',
    resumo: 'Nascimentos, casamentos e óbitos com emissão de certidões e integração à CRC Nacional.',
    atos: ['Registro de nascimento e emissão de CPF na hora', 'Habilitação, celebração e registro de casamento', 'Registro de óbito e traslado de corpo', 'Averbações, retificações e reconhecimento de paternidade', 'Certidões de nascimento, casamento e óbito'],
  },
  {
    id: 'protesto',
    icon: Gavel,
    tab: 'Protesto',
    title: 'Protesto de Títulos',
    resumo: 'Apontamento, intimação e baixa com acompanhamento de cada etapa pelo devedor e pelo credor.',
    atos: ['Apontamento de títulos e documentos de dívida', 'Intimação pessoal, por edital e eletrônica', 'Pagamento, baixa e cancelamento de protesto', 'Consulta de protestos e certidões', 'Anuência e desistência pelo credor'],
  },
  {
    id: 'td',
    icon: Landmark,
    tab: 'Títulos e Documentos',
    title: 'Títulos e Documentos / PJ',
    resumo: 'Registro de contratos e atos societários com validade perante terceiros.',
    atos: ['Registro de contratos, estatutos e atas de assembleia', 'Registro de títulos e documentos particulares', 'Notificação extrajudicial e comprovação de entrega', 'Registro de marcas, patentes e documentos em geral', 'Certidões e buscas por período'],
  },
]

export default function Servicos() {
  const [ativo, setAtivo] = useState(servicos[0].id)
  const atual = servicos.find(s => s.id === ativo) ?? servicos[0]
  const Icon = atual.icon

  return (
    <section id="servicos" className="border-y border-ink/10 bg-sand/60">
      <div className="wrap py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Atribuições</p>
            <h2 className="mt-3 max-w-xl font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
              Cinco especialidades, um só balcão
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Todas as atribuições da serventia reunidas no Ofício Único — você resolve o ato
            completo em uma única visita, sem deslocamento entre cidades.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Especialidades">
          {servicos.map((servico) => {
            const TabIcon = servico.icon
            const selected = servico.id === ativo
            return (
              <button
                key={servico.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setAtivo(servico.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 ${
                  selected
                    ? 'border-ink bg-ink text-paper'
                    : 'border-ink/15 bg-paper/70 text-ink/70 hover:border-ink/40 hover:text-ink'
                }`}
              >
                <TabIcon className="h-4 w-4" strokeWidth={1.8} />
                {servico.tab}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 rounded-[24px] border border-ink/10 bg-paper p-7 shadow-card lg:grid-cols-12 lg:p-9">
          <div className="lg:col-span-5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-brass-light">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{atual.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{atual.resumo}</p>
            <a href="#contato" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark hover:underline">
              Agendar este atendimento →
            </a>
          </div>

          <ul className="grid gap-3 border-ink/10 lg:col-span-7 lg:border-l lg:pl-9">
            {atual.atos.map(ato => (
              <li key={ato} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-dark" strokeWidth={2.4} />
                {ato}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-xs text-ink/45">
          Não encontrou o seu caso? Ligue para (84) 3329-3232 — a equipe orienta qual documento
          levar antes de você se deslocar.
        </p>
      </div>
    </section>
  )
}
