import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, User, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Business Websites',
      description: 'Professional corporate websites that establish your brand presence and drive conversions.',
      features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Analytics Setup'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payments, inventory management, and customer analytics.',
      features: ['Payment Integration', 'Inventory System', 'User Accounts', 'Order Management'],
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: User,
      title: 'Portfolio Sites',
      description: 'Stunning portfolio websites that showcase your work and attract potential clients.',
      features: ['Gallery Systems', 'Contact Forms', 'Blog Integration', 'Social Media'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Ongoing support, updates, and optimization to keep your website running smoothly.',
      features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', '24/7 Support'],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
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
            <Settings size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-foreground">To Succeed Online</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to launch and beyond, we provide comprehensive web development services 
            tailored to your specific needs and business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full gradient-card border-border/50 shadow-card group-hover:shadow-glow transition-all duration-500">
                <CardHeader className="text-center pb-4">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 shadow-lg`}
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full group-hover:bg-accent/10 group-hover:text-accent transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your vision and bring it to life with our expert team.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;