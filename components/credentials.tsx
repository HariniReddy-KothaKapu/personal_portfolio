"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Trophy, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Code at Christmas Hackathon",
    organization: "Girls Leading Tech",
    date: "Dec 2025",
  },
  {
    title: "Introduction to Artificial Intelligence",
    organization: "Infosys Springboard",
    date: "Oct 2025",
  },
  {
    title: "Introduction to Data Science",
    organization: "Infosys Springboard",
    date: "Oct 2025",
  },
  {
    title: "Sparkathon @ Walmart",
    organization: "Walmart",
    date: "Sep 2025",
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    organization: "Cisco",
    date: "Aug 2025",
  },
  {
    title: "Network Defense",
    organization: "Cisco Networking Academy",
    date: "Jul 2025",
  },
  {
    title: "Microsoft AI Skills Fest",
    organization: "Microsoft",
    date: "Apr 2025",
  },
  {
    title: "Database Management System",
    organization: "Great Learning",
    date: "Nov 2024",
  },
  {
    title: "Web Development",
    organization: "Simplilearn",
    date: "Nov 2024",
  },
  {
    title: "Basics of Python",
    organization: "Infosys Springboard",
    date: "Sep 2024",
  },
  {
    title: "Summer Of AI Internship Program",
    organization: "Swecha Telangana",
    date: "Jul 2024",
  },
  {
    title: "Problem Solving through Programming in C",
    organization: "NPTEL",
    date: "Apr 2024",
  },
  {
    title: "100 Days Coding Streak",
    organization: "CodeChef",
    date: "Achieved",
  },
]

const hackathons = [
  {
    title: "Code at Christmas Hackathon",
    organizer: "Girls Leading Tech",
    date: "December 2025",
    description:
      "Participated in a fun and creative hackathon focused on building unique, unconventional, and engaging tech projects using AI-powered vibe coding. The event encouraged innovation, experimentation, and rapid prototyping in a collaborative environment.",
    linkedinUrl: "https://www.linkedin.com/in/harinireddykothakapu/",
  },
  {
    title: "Sparkathon @ Walmart",
    organizer: "Walmart",
    date: "September 2025",
    description:
      "Participated in the Sparkathon hackathon organized by Walmart, focusing on innovative solutions and collaborative problem-solving with a team.",
    linkedinUrl: "https://www.linkedin.com/in/harinireddykothakapu/",
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Credentials & Achievements</h2>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Award className="h-6 w-6 text-[#77A9B7]" />
            My Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-[#ADD8E6]/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#77A9B7]/10">
                    <Award className="h-6 w-6 text-[#77A9B7]" />
                  </div>
                  <CardTitle className="text-lg leading-tight text-gray-900">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-1 text-sm font-medium text-[#77A9B7]">{cert.organization}</p>
                  <p className="mb-4 text-sm text-gray-500">{cert.date}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#77A9B7] text-[#77A9B7] hover:bg-[#77A9B7] hover:text-white bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/harinireddykothakapu/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-[#77A9B7] hover:bg-[#6a98a6]"
              onClick={() => window.open("https://www.linkedin.com/in/harinireddykothakapu/", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Certifications on LinkedIn
            </Button>
          </div>
        </div>

        {/* Hackathon & Achievements */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Trophy className="h-6 w-6 text-[#77A9B7]" />
            Hackathon & Achievements
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {hackathons.map((hackathon, index) => (
              <Card key={index} className="border-[#ADD8E6]/50 shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#77A9B7]/10">
                    <Trophy className="h-6 w-6 text-[#77A9B7]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{hackathon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm font-medium text-[#77A9B7]">{hackathon.organizer}</p>
                  <p className="mb-4 text-sm text-gray-500">{hackathon.date}</p>
                  {hackathon.description && <p className="mb-4 text-gray-700">{hackathon.description}</p>}
                  {hackathon.linkedinUrl && (
                    <Button
                      variant="outline"
                      className="border-[#77A9B7] text-[#77A9B7] hover:bg-[#77A9B7] hover:text-white bg-transparent"
                      onClick={() => window.open(hackathon.linkedinUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on LinkedIn
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
