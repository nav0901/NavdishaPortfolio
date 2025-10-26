import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Linkedin, Github, Mail, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Navdisha Batra
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
            Software Engineer | Salesforce | Agentic AI & RAG
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            I design AI-powered Salesforce solutions — from LWC & Apex automation to agentic workflows and RAG systems that transform data into decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-16"
        >
          <a href="mailto:batra.ku@northeastern.edu">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </a>
          
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 text-lg"
            onClick={() => scrollToSection('documents')}
          >
            <FileText className="w-5 h-5 mr-2" />
            View Resume
          </Button>

          <div className="flex gap-3">
            <a href="https://linkedin.com/in/navdisha-batra" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>
            <a href="https://github.com/nav0901" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                <Github className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-gray-500 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}