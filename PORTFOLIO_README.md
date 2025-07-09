# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast loading with Next.js
- 🎯 Smooth scrolling navigation
- 📝 Contact form
- 💼 Professional sections (About, Experience, Skills, Projects, Contact)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

Update the following sections in `src/app/page.tsx`:

- **Hero Section**: Replace "Your Name", job title, and description
- **About Section**: Update the personal description and skills
- **Contact Information**: Update email, phone, and location

### 2. Experience

In the Experience section, replace the sample job entries with your actual work experience:

```tsx
<div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
    <div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Your Job Title</h3>
      <p className="text-blue-600 dark:text-blue-400">Company Name</p>
    </div>
    <span className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">Start Date - End Date</span>
  </div>
  <p className="text-slate-600 dark:text-slate-300 mb-4">
    Description of your role and achievements...
  </p>
  <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">Skill 1</span>
    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">Skill 2</span>
  </div>
</div>
```

### 3. Skills

Update the skills section with your actual technical skills:

- **Frontend**: Update the technologies you work with
- **Backend**: Add your server-side technologies
- **DevOps**: Include your deployment and infrastructure tools

### 4. Projects

Replace the sample projects with your actual work:

```tsx
<div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Project Name</h3>
    <p className="text-slate-600 dark:text-slate-300 mb-4">
      Project description...
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">Tech 1</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">Tech 2</span>
    </div>
    <div className="flex space-x-3">
      <a href="your-project-url" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
      <a href="your-github-url" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">GitHub</a>
    </div>
  </div>
</div>
```

### 5. Contact Information

Update the contact section with your real information:

- Email address
- Phone number
- Location
- Social media links

### 6. CV/Resume

Replace the `CV_EN.pdf` file in the `public` folder with your actual CV/resume.

### 7. Profile Picture

To add your profile picture:

1. Add your image to the `public` folder
2. Replace the placeholder in the hero section:

```tsx
<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
  <img
    src="/your-profile-image.jpg"
    alt="Your Name"
    className="w-full h-full rounded-full object-cover"
  />
</div>
```

### 8. Colors and Styling

The portfolio uses a blue color scheme by default. To change colors:

- Primary color: `blue-600` (used for buttons, links, accents)
- Secondary colors: Various shades of `slate` for text and backgrounds
- You can replace these with your preferred color palette throughout the code

### 9. Adding New Sections

To add new sections, follow this pattern:

```tsx
<section id="new-section" className="py-20 bg-white dark:bg-slate-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Section Title</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>
    {/* Section content */}
  </div>
</section>
```

Don't forget to add the new section to the navigation menu.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform that supports Node.js

## Project Structure

```
my-portfolio/
├── public/
│   ├── CV_EN.pdf
│   └── icons/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── MobileMenu.tsx
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## License

This project is open source and available under the [MIT License](LICENSE).
