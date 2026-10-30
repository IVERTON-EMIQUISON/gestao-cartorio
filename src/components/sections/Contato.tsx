import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'

export default function Contato() {
  return (
    <section id="contato" className="bg-paper">
      <div className="wrap py-20">
        <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-ink text-paper shadow-card">
          <div className="grid lg:grid-cols-12">
            <div className="p-8 sm:p-12 lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light">Antes de sair de casa</p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold leading-tight sm:text-[2.4rem]">
                Ligue e confirme a documentação
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
                Diga o que você precisa resolver — escritura, certidão, protesto, registro de
                imóvel — e a equipe responde com a lista de documentos, o valor dos emolumentos e o
                prazo do ato.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-paper">(84) 3329-3232</p>
                    <p className="text-[12px] text-paper/50">Telefone fixo da serventia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-paper">atendimento@cartorioitau.com.br</p>
                    <p className="text-[12px] text-paper/50">Resposta em até 1 dia útil</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-paper">Rua Principal, s/n — Centro, Itaú/RN</p>
                    <p className="text-[12px] text-paper/50">Sede própria, com acesso pela rampa frontal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-paper">Segunda a sexta, 8h às 17h</p>
                    <p className="text-[12px] text-paper/50">Protocolo de documentos até as 16h</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-paper/10 bg-ink-800 p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light">Canais diretos</p>
              <div className="mt-6 space-y-3">
                <a href="https://wa.me/558433293232" className="flex items-center justify-between rounded-xl bg-paper/5 px-4 py-3.5 transition hover:bg-paper/10">
                  <span className="text-sm font-semibold text-paper">WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 text-brass-light" strokeWidth={2} />
                </a>
                <a href="tel:+558433293232" className="flex items-center justify-between rounded-xl bg-paper/5 px-4 py-3.5 transition hover:bg-paper/10">
                  <span className="text-sm font-semibold text-paper">Ligar agora</span>
                  <ArrowUpRight className="h-4 w-4 text-brass-light" strokeWidth={2} />
                </a>
                <a href="mailto:atendimento@cartorioitau.com.br" className="flex items-center justify-between rounded-xl bg-paper/5 px-4 py-3.5 transition hover:bg-paper/10">
                  <span className="text-sm font-semibold text-paper">Enviar e-mail</span>
                  <ArrowUpRight className="h-4 w-4 text-brass-light" strokeWidth={2} />
                </a>
              </div>

              <p className="mt-8 rounded-xl border border-brass/25 bg-brass/5 p-4 text-[12px] leading-relaxed text-paper/60">
                <span className="font-semibold text-brass-light">Atenção:</span> a serventia não
                solicita pagamento por telefone nem por links enviados em mensagens. Emolumentos
                são pagos presencialmente ou por guia oficial emitida no balcão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
