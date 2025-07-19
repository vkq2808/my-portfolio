interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-slate-900 dark:text-white font-medium">{label}</p>
        <p className="text-slate-600 dark:text-slate-300">{value}</p>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: string;
  href: string;
  label: string;
}

function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
}

export default function ContactSection() {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "vkq265@gmail.com" },
    { icon: "📱", label: "Phone", value: "+84 919 309 031" },
    { icon: "📍", label: "Location", value: "Ho Chi Minh City, Vietnam" }
  ];

  const socialLinks = [
    { icon: "💼", href: "https://www.linkedin.com/in/vkq265", label: "LinkedIn" },
    { icon: "🐱", href: "https://github.com/vkq2808", label: "GitHub" },
    // { icon: "🐦", href: "https://twitter.com/your-profile", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Let&lsquo;s work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Let&lsquo;s Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <ContactInfo
                  key={info.label}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                />
              ))}
            </div>

            <div className="mt-8">
              <p className="text-slate-600 dark:text-slate-300 mb-4">Follow me on social media:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
