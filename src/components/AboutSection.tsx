import { useState, useRef, useEffect } from 'react';

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

function TechnologyTags({ technologies }: { technologies: string[] }) {
  'use client';
  const [showAllTech, setShowAllTech] = useState(false);
  const extraTagsRef = useRef<HTMLDivElement>(null);
  const [extraTagsHeight, setExtraTagsHeight] = useState(0);

  useEffect(() => {
    if (extraTagsRef.current) {
      setExtraTagsHeight(extraTagsRef.current.scrollHeight);
    }
  }, [technologies]);

  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="flex flex-wrap gap-3">
        {technologies.length <= 5 ? technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
          >
            {tech}
          </span>
        )) : (
          <>
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}

            <div
              ref={extraTagsRef}
              className="flex flex-wrap gap-3 transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                height: showAllTech ? `${extraTagsHeight}px` : '0px',
                opacity: showAllTech ? 1 : 0,
                marginTop: showAllTech ? '0.75rem' : '0px'
              }}
            >
              {technologies.slice(5).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm cursor-pointer transition-all duration-200 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105"
            >
              {showAllTech ? "Show Less ↑" : `+${technologies.length - 5} more ↓`}
            </button>
          </>
        )}
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
