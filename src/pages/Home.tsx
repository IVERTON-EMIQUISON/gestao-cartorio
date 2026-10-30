import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Servicos from '@/components/sections/Servicos'
import Seguranca from '@/components/sections/Seguranca'
import Sistema from '@/components/sections/Sistema'
import Integracoes from '@/components/sections/Integracoes'
import Depoimentos from '@/components/sections/Depoimentos'
import Atendimento from '@/components/sections/Atendimento'
import Contato from '@/components/sections/Contato'

function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Seguranca />
        <Sistema />
        <Integracoes />
        <Depoimentos />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default Home
