import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harinireddykothakapu@gmail.com",
    link: "mailto:harinireddykothakapu@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/harinireddykothakapu",
    link: "https://www.linkedin.com/in/harinireddykothakapu/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/HariniReddy-KothaKapu",
    link: "https://github.com/HariniReddy-KothaKapu",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">{"Let's Connect"}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <Card className="h-full border-[#ADD8E6]/50 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#77A9B7]/10">
                    <contact.icon className="h-8 w-8 text-[#77A9B7]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{contact.label}</h3>
                  <p className="break-all text-sm text-gray-600">{contact.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
