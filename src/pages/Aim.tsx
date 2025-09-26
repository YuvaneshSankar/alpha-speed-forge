import { Target, Rocket, Zap, Trophy, Cog, Globe } from 'lucide-react';

const Aim = () => {
  const objectives = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Achieve unparalleled accuracy in design and manufacturing processes, setting new standards for automotive precision."
    },
    {
      icon: Rocket,
      title: "Performance Excellence", 
      description: "Deliver breakthrough performance metrics that surpass current industry benchmarks in speed and efficiency."
    },
    {
      icon: Zap,
      title: "Innovation Leadership",
      description: "Pioneer cutting-edge technologies that will define the future of automotive design and engineering."
    },
    {
      icon: Trophy,
      title: "Championship Quality",
      description: "Maintain Formula 1 level quality standards throughout every aspect of the development process."
    },
    {
      icon: Cog,
      title: "Technical Mastery",
      description: "Master advanced manufacturing techniques and materials science to push engineering boundaries."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Create solutions that will influence automotive design practices worldwide and inspire future innovations."
    }
  ];

  const goals = [
    {
      category: "Short Term",
      items: [
        "Complete aerodynamic optimization by Q1 2024",
        "Finalize prototype manufacturing process",
        "Conduct comprehensive testing protocols",
        "Achieve 95% structural integrity validation"
      ]
    },
    {
      category: "Medium Term", 
      items: [
        "Scale manufacturing capabilities",
        "Integrate advanced materials research",
        "Establish partnership networks",
        "Launch pilot production program"
      ]
    },
    {
      category: "Long Term",
      items: [
        "Revolutionize automotive design standards",
        "Expand into global markets",
        "Develop next-generation technologies",
        "Establish Alpha-Design as industry leader"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold hero-text mb-6">
            Project Aims & Vision
          </h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our mission is to redefine automotive design through precision engineering, 
            innovative technology, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Core Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-semibold text-center mb-12">
            Core Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="racing-card p-8 text-center group hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-brand flex items-center justify-center group-hover:shadow-glow transition-racing">
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-rajdhani font-semibold mb-4 text-foreground">
                  {objective.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="mx-6 w-3 h-3 rounded-full bg-primary shadow-glow"></div>
          <div className="h-px w-32 bg-gradient-to-r from-primary via-secondary to-transparent"></div>
        </div>

        {/* Goals Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-semibold text-center mb-12">
            Strategic Roadmap
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {goals.map((goalCategory, index) => (
              <div 
                key={index}
                className="racing-card p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-rajdhani font-semibold hero-text mb-2">
                    {goalCategory.category}
                  </h3>
                  <div className="w-12 h-px bg-gradient-brand mx-auto"></div>
                </div>
                
                <ul className="space-y-4">
                  {goalCategory.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:shadow-glow transition-racing"></div>
                      <span className="text-muted-foreground font-inter leading-relaxed group-hover:text-foreground transition-racing">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="racing-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-semibold hero-text mb-6">
              Our Vision
            </h2>
            <p className="text-xl font-inter text-muted-foreground leading-relaxed mb-8">
              "To become the definitive leader in automotive design innovation, where every creation 
              embodies the perfect fusion of artistic vision, engineering excellence, and technological 
              advancement that pushes the boundaries of what's possible."
            </p>
            <div className="w-24 h-px bg-gradient-brand mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;