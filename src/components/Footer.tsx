import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Janaka-sns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/janaka-kumara', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:janakakumara.nsn@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-glow">Janaka Kumara</div>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer specializing in Java technologies and full-stack development. 
                Passionate about creating innovative solutions and mentoring developers.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface rounded-lg text-muted-foreground hover:text-primary hover:bg-surface-hover transition-all duration-300 hover-glow"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:janakakumara.nsn@gmail.com"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  janakakumara.nsn@gmail.com
                </a>
                <p className="text-muted-foreground">Sri Lanka</p>
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Janaka Kumara. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              Made with <Heart size={14} className="text-primary mx-1" /> using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;