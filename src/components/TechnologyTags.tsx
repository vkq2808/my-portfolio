'use client';

import { useState, useEffect, useRef } from 'react';

function TechnologyTags({ technologies }: { technologies: string[] }) {

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

export default TechnologyTags;