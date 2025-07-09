interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  bgColor: string;
}

function SkillCard({ icon, title, description, technologies, bgColor }: SkillCardProps) {
  return (
    <div className="text-center p-6">
      <div className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <div className="space-y-2">
        {technologies.map((tech) => (
          <div key={tech} className="text-sm text-slate-500 dark:text-slate-400">{tech}</div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    {
      icon: "💻",
      title: "Frontend",
      description: "Modern and responsive user interfaces",
      technologies: [
        "React, Next.js, Vue.js",
        "TypeScript, JavaScript",
        "Tailwind CSS, SASS"
      ],
      bgColor: "bg-blue-100 dark:bg-blue-900"
    },
    {
      icon: "🛠️",
      title: "Backend",
      description: "Scalable server-side applications",
      technologies: [
        "Node.js, Express",
        "Python, Django",
        "PostgreSQL, MongoDB"
      ],
      bgColor: "bg-green-100 dark:bg-green-900"
    },
    {
      icon: "☁️",
      title: "DevOps",
      description: "Deployment and infrastructure",
      technologies: [
        "AWS, Vercel",
        "Docker, Kubernetes",
        "CI/CD, Git"
      ],
      bgColor: "bg-purple-100 dark:bg-purple-900"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
