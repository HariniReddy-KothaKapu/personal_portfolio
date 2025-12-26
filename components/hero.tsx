"use client"

import { Button } from "@/components/ui/button"
import { FileText, Mail } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#ADD8E6]/20 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">Kotha Kapu Harini Reddy</h1>
        <p className="mb-4 text-xl font-medium text-[#77A9B7] md:text-2xl">
          CSE Student | Aspiring Software Developer | Full Stack Developer
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          A passionate developer building modern, responsive, and user-friendly web applications.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://drive.google.com/file/d/1Yzl_mCQt4-g1GsriINNFOGk9dO_h6dxG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#77A9B7] px-8 py-2 text-base font-medium text-white hover:bg-[#6a98a6] transition-colors h-10 lg:h-11"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-[#77A9B7] text-[#77A9B7] hover:bg-[#77A9B7] hover:text-white bg-transparent"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
