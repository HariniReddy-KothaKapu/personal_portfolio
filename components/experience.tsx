import { Briefcase, Users, GraduationCap, HeartHandshake, Shield } from "lucide-react"

const experiences = [
  {
    title: "Cisco Boost 5.0 Trainee",
    company: "Cisco",
    date: "July 2025 – August 2025",
    icon: Briefcase,
    description:
      "Participated in Cisco Boost 5.0 training program, gaining hands-on experience in networking, cybersecurity, and technology solutions.",
  },
  {
    title: "Campus Ambassador",
    company: "GeeksforGeeks",
    date: "May 2025 – Present",
    icon: Briefcase,
    description:
      "Promoting GeeksforGeeks resources and initiatives on campus, organizing coding events, and fostering a community of learners.",
  },
  {
    title: "Executive Board Member",
    company: "ACM-W GNITS",
    date: "Jan 2025 – Aug 2025",
    icon: Users,
    description:
      "Leading initiatives to empower women in technology, organizing workshops, and contributing to the growth of the technical community.",
  },
  {
    title: "Student Council Member",
    company: "GNITSW",
    date: "Sep 2024 – Aug 2025",
    icon: GraduationCap,
    description:
      "Representing student interests, coordinating campus events, and bridging communication between students and administration.",
  },
  {
    title: "Development Team Lead",
    company: "Swecha Telangana",
    date: "May 2024 – Jul 2024",
    icon: Briefcase,
    description: "Led development projects focused on open-source software and community-driven technology solutions.",
  },
  {
    title: "Member",
    company: "NSS (National Service Scheme)",
    date: "Ongoing",
    icon: HeartHandshake,
    description: "Participating in community service activities and social welfare programs.",
  },
  {
    title: "Member",
    company: "Abhaya Club (Women Safety & Empowerment Club)",
    date: "Ongoing",
    icon: Shield,
    description: "Contributing to initiatives focused on women safety, empowerment, and awareness programs.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Professional Experience</h2>
        <div className="mx-auto max-w-4xl">
          <div className="relative border-l-2 border-[#ADD8E6]">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#77A9B7] ring-4 ring-white">
                  <exp.icon className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{exp.title}</h3>
                  <p className="mb-2 text-sm font-medium text-[#77A9B7]">{exp.company}</p>
                  <p className="mb-3 text-sm text-gray-500">{exp.date}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
