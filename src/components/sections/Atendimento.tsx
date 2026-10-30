import { GraduationCap, Headset, ArrowRightLeft, MessageCircle } from 'lucide-react'

const etapas = [
  {
    icon: ArrowRightLeft,
    titulo: 'Documentos conferidos antes',
    texto: 'Ao ligar ou escrever, a equipe informa a lista exata de documentos e o valor dos emolumentos do seu caso. Você vem uma vez só.',
  },
  {
    icon: GraduationCap,
    titulo: 'Orientação sem juridiquês',
    texto: 'Cada cláusula da escritura é explicada antes da assinatura. Se a família tem dúvida, a conversa continua até ficar claro.',
  },
  {
    icon: Headset,
    titulo: 'Acompanhamento até o fim',
    texto: 'Você recebe o número do protocolo e pode consultar o andamento por telefone, WhatsApp ou e-mail, sem precisar retornar à sede.',
  },
]

export default function Atendimento() {
  return (
    <section id="atendimento" className="bg-sand/60 border-y border-ink/10">
      <div className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Atendimento</p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
              Irritação de cartório, aqui não tem
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              A maior queixa sobre serventias é chegar com a documentação incompleta e voltar para
              casa sem o ato. Nosso processo começa no primeiro contato, com informação clara sobre
              prazos, valores e documentos.
            </p>

            <a
              href="https://wa.me/558433293232"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#1F6B4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18543a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6B4A] focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {etapas.map((etapa, index) => {
                const Icon = etapa.icon
                return (
                  <li key={etapa.titulo} className="flex gap-5 rounded-2xl border border-ink/10 bg-paper p-6">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-brass-light">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="mt-2 font-display text-[11px] font-semibold text-ink/30">
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink">{etapa.titulo}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink/60">{etapa.texto}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
