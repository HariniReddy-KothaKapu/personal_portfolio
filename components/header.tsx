"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Credentials", id: "credentials" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#77A9B7] md:text-2xl">Kotha Kapu Harini Reddy</h1>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#77A9B7]"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-[#77A9B7] hover:bg-[#6a98a6]"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Yzl_mCQt4-g1GsriINNFOGk9dO_h6dxG/view?usp=sharing",
                  "_blank",
                )
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t pt-4 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-sm font-medium text-gray-700 transition-colors hover:text-[#77A9B7]"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full bg-[#77A9B7] hover:bg-[#6a98a6]"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Yzl_mCQt4-g1GsriINNFOGk9dO_h6dxG/view?usp=sharing",
                  "_blank",
                )
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
