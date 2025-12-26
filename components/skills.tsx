import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Database, BookOpen } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "C", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Tools & Databases",
    icon: Database,
    skills: ["SQL", "Git", "GitHub", "VS Code"],
  },
  {
    title: "CS Concepts",
    icon: BookOpen,
    skills: ["DSA", "OOP's", "OS", "DBMS", "CN", "AI", "ML"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">My Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-[#ADD8E6]/50 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-[#77A9B7]/10 p-2">
                    <category.icon className="h-6 w-6 text-[#77A9B7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#ADD8E6]/30 px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
