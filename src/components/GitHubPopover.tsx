import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface GitHubLink {
  title: string;
  url: string;
}

interface GitHubPopoverProps {
  githubUrls: GitHubLink[];
}

export default function GitHubPopover({ githubUrls }: GitHubPopoverProps) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm focus:outline-none">
        GitHub
        <ChevronDownIcon className="h-4 w-4" />
      </PopoverButton>

      <PopoverPanel className="absolute z-10 mt-2 w-48 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-2">
          {githubUrls.map((repo) => (
            <a
              key={repo.title}
              href={repo.url}
              className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.title}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
