import { Mail, MapPin, Phone, Clock, ShieldCheck, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/75">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/50 font-display text-sm font-semibold text-brass-light">
              CÚ
            </span>
            <div className="leading-tight">
              <p className="font-display text-[17px] font-semibold text-paper">Cartório Único de Itaú</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Ofício Único · Comarca de Itaú/RN</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
            Serventia extrajudicial com atribuições de Notas, Registro Civil, Registro de Imóveis,
            Protesto e Títulos e Documentos.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-paper/40">
            Serventia submetida à fiscalização do Tribunal de Justiça do Rio Grande do Norte e às
            normas da Corregedoria-Geral da Justiça.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-light">Serviços</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Registro de Imóveis', 'Tabelionato de Notas', 'Registro Civil (RCPN)', 'Protesto de Títulos', 'Títulos e Documentos'].map(item => (
              <li key={item}>
                <a href="#servicos" className="transition hover:text-paper">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-light">Contato</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
              <span>Rua Principal, s/n — Centro<br />Itaú/RN</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
              <span>(84) 3329-3232</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
              <span>atendimento@cartorioitau.com.br</span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.8} />
              <span>Seg. a sex., 8h às 17h</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-light">Transparência</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Termos de uso', 'Política de privacidade (LGPD)', 'Tabela de emolumentos', 'Canal de reclamações'].map(item => (
              <li key={item}>
                <a href="#contato" className="transition hover:text-paper">{item}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2">
            <a href="#contato" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 transition hover:border-brass hover:text-paper">
              <Linkedin className="h-4 w-4" strokeWidth={1.6} />
            </a>
            <a href="#contato" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 transition hover:border-brass hover:text-paper">
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cartório Único de Itaú/RN. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brass" strokeWidth={1.8} />
            Provimento 74/CNJ · LGPD · Criptografia de ponta a ponta
          </p>
        </div>
      </div>
    </footer>
  )
}
