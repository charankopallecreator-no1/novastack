import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle, Folder } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import projectPlaceholder from '/assets/project-placeholder.png';
import SEO from '@/components/SEO';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed';
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NovaStack Project Portfolio",
    "description": "A showcase of our completed and ongoing web development projects including business websites, e-commerce platforms, and SaaS applications.",
    "url": `${window.location.origin}/projects`,
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "TechCorp Website",
        "description": "Modern corporate website with advanced animations and CMS integration",
        "creator": {
          "@type": "Organization",
          "name": "NovaStack"
        },
        "about": "Business Website Development"
      },
      {
        "@type": "CreativeWork", 
        "name": "E-Store Platform",
        "description": "Full-featured e-commerce platform with payment processing and inventory management",
        "creator": {
          "@type": "Organization",
          "name": "NovaStack"
        },
        "about": "E-Commerce Development"
      }
    ]
  };

  // Mock data - In real app, this would fetch from /api/projects
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'TechCorp Website',
        description: 'Modern corporate website with advanced animations and CMS integration for a technology consulting firm.',
        status: 'completed',
        image: projectPlaceholder,
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
        category: 'Business'
      },
      {
        id: '2',
        title: 'E-Store Platform',
        description: 'Full-featured e-commerce platform with payment processing, inventory management, and analytics.',
        status: 'completed',
        image: projectPlaceholder,
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: '#',
        githubUrl: '#',
        category: 'E-Commerce'
      },
      {
        id: '3',
        title: 'Designer Portfolio',
        description: 'Stunning portfolio website showcasing creative work with interactive galleries and smooth transitions.',
        status: 'ongoing',
        image: projectPlaceholder,
        technologies: ['React', 'Three.js', 'GSAP', 'Sanity CMS'],
        category: 'Portfolio'
      },
      {
        id: '4',
        title: 'StartupLab Platform',
        description: 'SaaS platform for startup management with dashboard, analytics, and team collaboration features.',
        status: 'ongoing',
        image: projectPlaceholder,
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
        category: 'SaaS'
      },
      {
        id: '5',
        title: 'Restaurant Chain',
        description: 'Multi-location restaurant website with online ordering, reservations, and loyalty program.',
        status: 'completed',
        image: projectPlaceholder,
        technologies: ['React', 'Node.js', 'MySQL', 'Square API'],
        liveUrl: '#',
        category: 'Business'
      },
      {
        id: '6',
        title: 'Artist Showcase',
        description: 'Immersive art gallery website with virtual exhibitions and interactive 3D experiences.',
        status: 'completed',
        image: projectPlaceholder,
        technologies: ['React', 'Three.js', 'WebGL', 'Firebase'],
        liveUrl: '#',
        githubUrl: '#',
        category: 'Portfolio'
      }
    ];

    // Simulate API loading
    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="h-full gradient-card border-border/50 shadow-card group-hover:shadow-glow transition-all duration-500 overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image || projectPlaceholder}
            alt={`${project.title} - Project Thumbnail`}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge 
              variant={project.status === 'completed' ? 'default' : 'secondary'}
              className={`${
                project.status === 'completed' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-orange-500 hover:bg-orange-600'
              } text-white shadow-lg`}
            >
              {project.status === 'completed' ? (
                <><CheckCircle size={12} className="mr-1" /> Completed</>
              ) : (
                <><Clock size={12} className="mr-1" /> In Progress</>
              )}
            </Badge>
          </div>

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex space-x-2">
              {project.liveUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Folder size={14} className="text-accent" />
                <span className="text-sm text-accent">{project.category}</span>
              </div>
            </div>
          </div>
          <CardDescription className="text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              >
                <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="gradient-card rounded-lg p-6 border border-border/50">
            <div className="bg-muted rounded-lg h-48 mb-4" />
            <div className="space-y-2">
              <div className="bg-muted rounded h-4 w-3/4" />
              <div className="bg-muted rounded h-4 w-1/2" />
              <div className="bg-muted rounded h-4 w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SEO
        title="Web Development Portfolio - Our Best Projects | NovaStack"
        description="Explore our portfolio of successful web development projects. From business websites to e-commerce platforms and SaaS applications. See our work and get inspired!"
        keywords="web development portfolio, react projects, e-commerce websites, business website examples, web development showcase, novastack projects"
        canonical="/projects"
        structuredData={portfolioSchema}
      />
      <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-card px-4 py-2 rounded-full border border-border/50 mb-6"
              >
                <Folder size={16} className="text-accent" />
                <span className="text-sm text-accent font-medium">Our Work</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Projects That
                </span>
                <br />
                <span className="text-foreground">Make an Impact</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects, from ongoing developments to completed 
                launches that have helped businesses thrive online.
              </p>
            </motion.div>

            {/* Projects Tabs */}
            <Tabs defaultValue="all" className="w-full mb-16">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/50">
                <TabsTrigger value="all" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                  All Projects ({projects.length})
                </TabsTrigger>
                <TabsTrigger value="ongoing" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                  Ongoing ({ongoingProjects.length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                  Completed ({completedProjects.length})
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                {loading ? (
                  <LoadingSkeleton />
                ) : (
                  <>
                    <TabsContent value="all">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                          <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="ongoing">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ongoingProjects.map((project, index) => (
                          <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="completed">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.map((project, index) => (
                          <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                      </div>
                    </TabsContent>
                  </>
                )}
              </AnimatePresence>
            </Tabs>

            {/* CTA Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can bring your vision to life with our expertise.
                </p>
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default Projects;