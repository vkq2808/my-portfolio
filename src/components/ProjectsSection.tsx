interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  projectUrl?: string;
  githubUrl?: string;
}

function ProjectCard({ title, description, technologies, gradientFrom, gradientTo, projectUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {projectUrl && (
            <a href={projectUrl} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              View Project
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with payment integration and admin dashboard.",
      technologies: ["Next.js", "Stripe", "Prisma"],
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-600",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Socket.io", "Node.js"],
      gradientFrom: "from-green-400",
      gradientTo: "to-green-600",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with detailed forecasts and location-based services.",
      technologies: ["Vue.js", "Weather API", "Chart.js"],
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600",
      projectUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              gradientFrom={project.gradientFrom}
              gradientTo={project.gradientTo}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
