import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-green-400' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-2">
                <img src="/assets/nova-logo.png" alt="NovaStack" className="h-8 w-auto" />
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  NovaStack
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                We're an independent freelance team bringing modern, scalable websites to life. 
                Agency quality, freelancer flexibility - that's our promise to every client.
              </p>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> charankopallecreator@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Phone:</strong> +91 9908011844
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response:</strong> Within 24 hours
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl bg-gradient-card border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} transition-colors group shadow-card hover:shadow-glow`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <a
                      href={link.href}
                      className="block text-muted-foreground hover:text-accent transition-colors group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <nav className="space-y-3">
                {[
                  'Business Websites',
                  'E-Commerce Stores',
                  'Portfolio Sites',
                  'Web Maintenance',
                  'SEO Optimization',
                  'Custom Development'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <span className="block text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>© {currentYear} NovaStack. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors">Cookies</a>
              </div>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-accent hover:bg-accent/10 group"
            >
              Back to Top
              <ArrowUp size={16} className="ml-2 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;