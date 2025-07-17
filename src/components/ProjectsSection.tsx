import Image from "next/image";
import TechnologyTags from "./TechnologyTags";
import GitHubPopover from "./GitHubPopover";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string | { title: string, url: string }[];
  imgPath: string;
}

function ProjectCard({ title, description, technologies, projectUrl, githubUrl, imgPath }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
      <div className="h-64 relative overflow-hidden">
        <Image src={imgPath} alt="" fill className="object-cover" />
      </div>
      <div className="p-6 gap-5 flex flex-col">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        <TechnologyTags technologies={technologies} />
        <div className="flex space-x-3">
          {projectUrl && (
            <a href={projectUrl} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              View Project
            </a>
          )}
          <div className="flex-1 flex justify-end items-center space-x-2">
            {typeof githubUrl === "string" && (
              <a href={githubUrl} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                GitHub
              </a>
            )}
            {Array.isArray(githubUrl) && (
              <GitHubPopover githubUrls={githubUrl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Car Parts E-Commerce Website - Gara UTE",
      description: "A full-featured e-commerce solution with payment integration and admin dashboard. After the project was completed, I focused on performance optimization and modern development practices. Then, I migrated the database from MySQL to PostgreSQL.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Sequelize"],
      projectUrl: "https://car-accessories-eccomerce.vercel.app/",
      githubUrl: "https://github.com/vkq2808/car-accessories-eccomerce",
      imgPath: "/car-ecommerce-backdrop.png"
    },
    {
      title: "Movie Streaming Website - MovieHub",
      description: "A movie streaming platform with a vast library of films and TV shows, featuring user authentication and personalized recommendations.",
      technologies: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Passport.js", "TypeORM"],
      projectUrl: "https://movie-website-frontend-two.vercel.app/",
      githubUrl: [
        { title: "Frontend", url: "https://github.com/vkq2808/movie-website-frontend" },
        { title: "Backend", url: "https://github.com/vkq2808/movie-website-backend" }
      ],
      imgPath: "/movie-streaming-backdrop.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              imgPath={project.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
