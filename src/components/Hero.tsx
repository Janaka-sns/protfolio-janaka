
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <p className="text-primary font-semibold text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-shimmer">Janaka Kumara</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer | Full-Stack Java & Angular Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Results-driven Software Engineer with over 4 years of experience specializing in 
              Java technologies and front-end development. Passionate about creating scalable 
              business automation solutions and mentoring fellow developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-glow"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="btn-outline-glow"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-surface rounded-full">Java</span>
              <span className="px-3 py-1 bg-surface rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-surface rounded-full">Angular</span>
              <span className="px-3 py-1 bg-surface rounded-full">Microservices</span>
              <span className="px-3 py-1 bg-surface rounded-full">Docker</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/YhdTfGzR/image.png"
                    alt="Janaka Kumara - Software Engineer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl font-bold text-primary">JK</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
