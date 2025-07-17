'use client';

import { useState } from 'react';

function TechnologyTags({ technologies }: { technologies: string[] }) {

  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="flex flex-wrap gap-3">
        {technologies.length <= 5 ? technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap"
            style={{ height: '32px', minHeight: '32px' }}
          >
            {tech}
          </span>
        )) : (
          <>
            <div className="flex flex-wrap gap-3">
              {showAllTech ?
                technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap"
                    style={{ height: '32px', minHeight: '32px' }}
                  >
                    {tech}
                  </span>
                )) : technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap"
                    style={{ height: '32px', minHeight: '32px' }}
                  >
                    {tech}
                  </span>
                ))}

              <button
                onClick={() => setShowAllTech(!showAllTech)}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm whitespace-nowrap cursor-pointer transition-all duration-200 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105"
                style={{ height: '32px', minHeight: '32px' }}
              >
                {showAllTech ? "Show Less ↑" : `+${technologies.length - 5} more ↓`}
              </button>
            </div>

          </>
        )}
      </div>
    </div>
  );
}

export default TechnologyTags;