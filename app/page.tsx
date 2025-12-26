import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Credentials from "@/components/credentials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  )
}
