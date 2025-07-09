'use client';

import Image from "next/image";

export default function HeroSection() {
  const handleDownloadCV = async () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/CV_EN.pdf'; // Path to your CV file in public folder
      link.download = 'Vu_Khanh_Quoc_CV.pdf'; // Custom filename for download
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      // Handle error - maybe show a fallback link
      console.log("error downloading CV:", error);
      window.open('/CV_EN.pdf', '_blank');
    }
  };
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-108 h-108 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full overflow-clip rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Image src='https://media.licdn.com/dms/image/v2/D5603AQFzlR1l4940Hg/profile-displayphoto-shrink_800_800/B56ZWsYQivGsAg-/0/1742353796068?e=1757548800&v=beta&t=zYzCOntePl0XNEmnsLPdaa4ruikim-62V2aurlCTyVY'
                  width={450}
                  height={450}
                  alt="" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Vũ Khánh Quốc
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            I combine technical expertise with creative problem-solving to build amazing products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-8 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              📄 Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
