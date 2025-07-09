'use client';

import TechnologyTags from './TechnologyTags';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
        <span className="text-slate-500 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}


export default function AboutSection() {
  const skills = [
    { skill: "Frontend Development", percentage: 90 },
    { skill: "Backend Development", percentage: 85 },
    { skill: "UI/UX Design", percentage: 80 },
    { skill: "Database Management", percentage: 75 },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "CSS",
    "HTML",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center transform transition-transform duration-300 ease-in-out ">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Hello! I&lsquo;m a passionate developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              With several years of experience in web development, I specialize in creating
              modern, responsive applications using the latest technologies. I love turning
              complex problems into simple, beautiful designs.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              When I&lsquo;m not coding, you can find me exploring new technologies, contributing
              to open source projects, or sharing knowledge with the developer community.
            </p>
            <TechnologyTags technologies={technologies} />

          </div>
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar key={skill.skill} skill={skill.skill} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
