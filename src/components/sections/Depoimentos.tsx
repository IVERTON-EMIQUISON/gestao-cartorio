import { Quote } from 'lucide-react'

const depoimentos = [
  {
    texto: 'Precisei da escritura e da averbação no mesmo dia, voltando de Natal. Resolveram tudo no balcão, sem me mandar de um lado para o outro. Saí com o documento na mão.',
    nome: 'Ana Cláudia M.',
    cargo: 'Compradora de imóvel · Itaú/RN',
  },
  {
    texto: 'Trabalho com inventários na região e é o cartório mais previsível que tenho. A equipe aponta o que falta na hora e a certidão sai no prazo combinado.',
    nome: 'Dr. Rogério Batista',
    cargo: 'Advogado · OAB/RN',
  },
  {
    texto: 'Registrei o nascimento do meu filho e já saí com o CPF dele. Um atendimento humano, paciente, daqueles que explicam duas vezes se precisar.',
    nome: 'Francisca de Souza',
    cargo: 'Moradora de Itaú/RN',
  },
]

export default function Depoimentos() {
  return (
    <section className="bg-paper">
      <div className="wrap py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">Quem já passou por aqui</p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
              A confiança se constrói ato por ato
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
              Atendemos famílias, produtores rurais, advogados e empresas de toda a Comarca de Itaú.
              O que mais ouvimos não é sobre prazo — é sobre a tranquilidade de ser bem orientado.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-ink/10 pt-7 sm:max-w-md">
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">+10 anos</dt>
                <dd className="mt-1 text-[11.5px] leading-snug text-ink/50">de serventia instalada na comarca</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">+12 mil</dt>
                <dd className="mt-1 text-[11.5px] leading-snug text-ink/50">atos praticados nos últimos 5 anos</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">100%</dt>
                <dd className="mt-1 text-[11.5px] leading-snug text-ink/50">dos atos com selo digital e trilha de auditoria</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">5 dias</dt>
                <dd className="mt-1 text-[11.5px] leading-snug text-ink/50">prazo médio de certidão de registro de imóveis</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4 lg:col-span-6">
            {depoimentos.map(dep => (
              <figure key={dep.nome} className="rounded-2xl border border-ink/10 bg-white/60 p-6 shadow-card">
                <Quote className="h-5 w-5 text-brass" strokeWidth={2} />
                <blockquote className="mt-3 font-display text-[15px] leading-relaxed text-ink/80">
                  “{dep.texto}”
                </blockquote>
                <figcaption className="mt-4 border-t border-ink/10 pt-3 text-[12px]">
                  <span className="font-semibold text-ink">{dep.nome}</span>
                  <span className="text-ink/45"> · {dep.cargo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
