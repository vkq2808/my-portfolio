import Image from "next/image";
import TechnologyTags from "./TechnologyTags";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
}

function ExperienceItem({ title, company, period, description, technologies, image, demoUrl }: ExperienceItemProps) {
  return (
    <div className="flex flex-row w-full bg-white dark:bg-slate-900 rounded-lg p-8 shadow-sm">
      <div className="bg-white dark:bg-slate-900 p-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{company}</p>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-line">
          {description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
        {
          demoUrl && (
            <a
              href={demoUrl}
              className="text-red-600 dark:red-blue-400 hover:underline text-lg mb-4 inline-block"
            >
              View Demo
            </a>
          )
        }
        <TechnologyTags technologies={technologies} />
      </div>
      <div className="flex flex-col min-w-40">
        <div className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">{period}</div>
        <Image
          src={image}
          alt={company}
          width={160}
          height={160}
          quality={100}
          priority
          className="w-40 h-40 ml-4 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Intern Frontend Developer",
      company: "HCMUTE Software Development Center",
      period: "08/2024-12/2024",
      description: [
        "• Learned about modular architecture and gained hands-on experience with TypeScript and Angular.",
        "• Participated in the development of a childcare management website, focusing on admin modules.",
        "• Completed assigned tasks with a proactive attitude.",
        "• Built reusable modules and made significant contributions to the overall system design."
      ],
      technologies: ["Angular", "Typescript"],
      image: "/hcmute.png",
    },
    {
      title: "Freelance Fullstack Developer",
      company: "Personal Projects for Clients",
      period: "09/2024-12/2024",
      description: [
        "Developed a car parts e-commerce website as a hands-on project.",
        "Integrated key technologies including ExpressJS for the backend, and ReactJS, Tailwind CSS, Redux for the frontend.",
        "Gained familiarity with business logic and successfully built a relatively complete and functional website.",
        "Focused on performance optimization and modern development practices."
      ],
      technologies: ["JavaScript", "React.js", "Tailwind CSS", "Express.js", "MySQL", "Redux"],
      image: "/gara-ute.png",
      demoUrl: "https://car-accessories-eccomerce.vercel.app/",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-12 w-full">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title + index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
              image={exp.image}
              demoUrl={exp.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
