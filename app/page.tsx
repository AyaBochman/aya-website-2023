import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Work from '@/components/work'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-slate-800 relative">
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}
