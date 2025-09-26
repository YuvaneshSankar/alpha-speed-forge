const Progress = () => {
  const milestones = [
    {
      id: 1,
      title: "Initial Design Concepts",
      description: "Created preliminary sketches and 3D wireframes using advanced CAD software. Established core design principles and aerodynamic objectives.",
      image: "/milestone-1.jpg",
      status: "completed",
      date: "Week 1-2"
    },
    {
      id: 2,
      title: "Aerodynamic Testing",
      description: "Conducted extensive wind tunnel simulations and computational fluid dynamics analysis to optimize airflow and downforce characteristics.",
      image: "/milestone-2.jpg", 
      status: "completed",
      date: "Week 3-4"
    },
    {
      id: 3,
      title: "Prototype Manufacturing",
      description: "Advanced 3D printing and precision manufacturing of key components. Material testing and structural integrity validation.",
      image: "/milestone-3.jpg",
      status: "in-progress",
      date: "Week 5-6"
    },
    {
      id: 4,
      title: "Final Assembly & Testing",
      description: "Complete assembly of all components with professional team oversight. Performance testing and quality assurance protocols.",
      image: "/milestone-4.jpg",
      status: "upcoming",
      date: "Week 7-8"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400';
      case 'in-progress': return 'text-secondary border-secondary';
      case 'upcoming': return 'text-muted-foreground border-muted';
      default: return 'text-muted-foreground border-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'in-progress': return '⚡';
      case 'upcoming': return '○';
      default: return '○';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold hero-text mb-4">
            Project Progress
          </h1>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Track our journey from concept to completion through detailed milestones 
            and development phases.
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className="timeline-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Badge */}
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getStatusColor(milestone.status)}`}>
                <span>{getStatusIcon(milestone.status)}</span>
                <span className="capitalize font-rajdhani">{milestone.status.replace('-', ' ')}</span>
              </div>

              {/* Milestone Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-racing"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-rajdhani font-semibold text-foreground">
                    {milestone.title}  
                  </h3>
                  <span className="text-sm font-inter text-primary font-medium">
                    {milestone.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-rajdhani font-medium text-foreground">
                    Milestone {milestone.id} of 4
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((step) => (
                      <div 
                        key={step}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          step <= milestone.id 
                            ? 'bg-primary' 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-rajdhani font-semibold mb-2">
              Overall Project Completion
            </h3>
            <p className="text-4xl font-rajdhani font-bold hero-text">
              75%
            </p>
          </div>
          
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full brand-gradient rounded-full transition-all duration-1000 ease-out"
              style={{ width: '75%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;