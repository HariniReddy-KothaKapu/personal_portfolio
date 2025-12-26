"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2 } from "lucide-react"

const projects = [
  {
    title: "Resume Gap Analyzer",
    description:
      "An application that analyzes a user's resume, identifies skill gaps based on a target role, and provides personalized suggestions to improve those gaps.",
    achievements: [
      "Developed an intelligent resume analysis tool",
      "Implemented skill gap identification algorithm",
      "Created personalized improvement recommendations",
    ],
    techStack: ["React.js", "JavaScript", "Machine Learning"],
    github: "https://github.com/HariniReddy-KothaKapu/Resume-Gap-Analyzer",
  },
  {
    title: "Listo",
    description: "A feature-rich to-do list web application designed to help users organize tasks efficiently.",
    achievements: [
      "Developed a user-friendly interface for task management",
      "Implemented features like task categorization and priority settings",
      "Ensured responsive design for seamless use across devices",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/HariniReddy-KothaKapu/listo",
  },
  {
    title: "AQI Predictor",
    description: "A machine learning-based application to predict Air Quality Index (AQI) using historical data.",
    achievements: [
      "Built predictive models to forecast AQI levels accurately",
      "Analyzed environmental data to identify pollution trends",
      "Created visualizations for better data interpretation",
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/HariniReddy-KothaKapu/AQI-Predictor",
  },
  {
    title: "Spendo",
    description: "An expense tracking application to help users manage their finances effectively.",
    achievements: [
      "Designed an intuitive interface for logging expenses and income",
      "Implemented data visualization for spending patterns",
      "Added features for budget planning and financial insights",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/HariniReddy-KothaKapu/Spendo",
  },
  {
    title: "Event Sphere",
    description: "A platform for managing and discovering events, facilitating seamless event organization.",
    achievements: [
      "Developed a comprehensive event management system",
      "Enabled users to create, browse, and register for events",
      "Integrated features for event reminders and notifications",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/HariniReddy-KothaKapu/event-sphere",
  },
  {
    title: "Crop Price Prediction System",
    description: "A data-driven solution to predict crop prices and assist farmers in making informed decisions.",
    achievements: [
      "Utilized machine learning algorithms for price forecasting",
      "Analyzed market trends and historical data",
      "Provided insights to optimize crop selling strategies",
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/HariniReddy-KothaKapu/Crop-Price-Prediction-System",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col border-[#ADD8E6]/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#77A9B7]">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm text-gray-600">{project.description}</p>
                <div className="mb-4 space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#77A9B7]" />
                      <p className="text-sm text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#ADD8E6]/30 px-2 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#77A9B7] text-[#77A9B7] hover:bg-[#77A9B7] hover:text-white bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="bg-[#77A9B7] hover:bg-[#6a98a6]"
            onClick={() => window.open("https://github.com/HariniReddy-KothaKapu", "_blank")}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
