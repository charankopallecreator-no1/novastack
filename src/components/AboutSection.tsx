import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import aboutImage from '/assets/about-placeholder.jpg';

const AboutSection = () => {
  const skills = [
    'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Three.js', 
    'TypeScript', 'Next.js', 'Express', 'PostgreSQL', 'AWS',
    'Docker', 'GraphQL', 'Firebase', 'Stripe', 'Framer Motion'
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every project is crafted with attention to detail and built to last.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our success. We work as an extension of your team.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of trends to deliver cutting-edge solutions.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every line of code.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-card px-4 py-2 rounded-full border border-border/50 mb-6"
          >
            <Users size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">About NovaStack</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet the Team
            </span>
            <br />
            <span className="text-foreground">Behind Your Success</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src={aboutImage}
                alt="NovaStack team workspace - Professional freelance development environment"
                className="w-full rounded-2xl shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-gradient-primary rounded-2xl p-4 shadow-glow"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 gradient-card rounded-2xl p-4 border border-border/50 shadow-card"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                We're an independent freelance team bringing modern, scalable websites to life.
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-accent font-semibold">Agency quality, freelancer flexibility.</span> That's our promise. 
                We combine the expertise and professionalism of a large agency with the personal 
                attention and agility of independent freelancers.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team specializes in modern web technologies and best practices, ensuring 
                your project is built for performance, scalability, and future growth. We don't 
                just build websites – we create digital experiences that drive results.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-gradient-card border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="gradient-card rounded-2xl p-6 border border-border/50 shadow-card group-hover:shadow-glow transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${value.color} p-3 mb-4 shadow-lg`}
                  >
                    <value.icon size={24} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gradient-card rounded-2xl p-8 border border-border/50 shadow-card"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;