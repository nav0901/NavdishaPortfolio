import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, FileText, Download } from 'lucide-react';
import HeroSection from '../components/portfolio/HeroSection';
import SkillsGrid from '../components/portfolio/SkillsGrid';
import ExperienceTimeline from '../components/portfolio/ExperienceTimeline';
import ProjectCard from '../components/portfolio/ProjectCard';

const projects = [
  {
    title: "Smart Proposal",
    description: "AI-powered PDF quote comparison system leveraging Azure Vision AI, custom Apex services, Lightning Web Components, and Visualforce for intelligent document processing and underwriting automation at Renegade Insurance.",
    tags: ["Azure Vision AI", "Apex", "LWC", "Visualforce", "AI/ML"],
    link: "#"
  },
  {
    title: "Commercial Clearing House",
    description: "Comprehensive underwriting workflow engine featuring custom Salesforce objects, intelligent queue management, and automated submission processing for commercial insurance operations.",
    tags: ["Salesforce", "Apex", "Custom Objects", "Workflow Automation"],
    link: "#"
  },
  {
    title: "PlotTrace – AI Reading Companion",
    description: "Mobile application combining React Native with AI-powered chapter summarization, integrated with AWS S3 for document storage and MongoDB for user data management.",
    tags: ["React Native", "OpenAI", "AWS S3", "MongoDB", "Mobile Dev"],
    github: "https://github.com/nav0901"
  }
];

const documents = [
  { name: "General Resume", icon: FileText, color: "blue" },
  { name: "Salesforce-Focused Resume", icon: FileText, color: "purple" },
  { name: "Platform Developer I Certificate", icon: Award, color: "green" },
  { name: "Admin Certification", icon: Award, color: "yellow" }
];

export default function Portfolio() {
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    return () => {
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center">
              About <span className="text-blue-400">Me</span>
            </h2>
            <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-12">
                <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                  Salesforce developer and AI engineer with <span className="text-blue-400 font-semibold">3.5+ years</span> of experience building scalable Lightning Web Components, Apex automations, Data Cloud integrations, agentic AI pipelines, and RAG systems integrated with real business workflows. 
                  <br/><br/>
                  I specialize in bridging enterprise Salesforce platforms with cutting-edge AI technologies to create intelligent, data-driven solutions that deliver measurable business impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-center">
              <span className="text-blue-400">Skills</span> & Expertise
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Technologies and tools I work with
            </p>
            <SkillsGrid />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-center">
              Work <span className="text-blue-400">Experience</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Building enterprise solutions across industries
            </p>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-center">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Highlighting impactful solutions and innovations
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center">
              Education & <span className="text-blue-400">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">MS Information Systems</h3>
                      <p className="text-blue-400 text-lg mb-2">Northeastern University</p>
                      <p className="text-gray-400">Boston, MA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
                      <div className="space-y-2 text-gray-300">
                        <p>• Salesforce Platform Developer I</p>
                        <p>• Salesforce Administrator</p>
                        <p>• Salesforce App Builder</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-center">
              <span className="text-blue-400">Documents</span> & Downloads
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Access my resume and certification documents
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-${doc.color}-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-${doc.color}-500/30 transition-all`}>
                        <doc.icon className={`w-8 h-8 text-${doc.color}-400`} />
                      </div>
                      <p className="text-white font-medium mb-4">{doc.name}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-blue-500/50"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">© 2025 Navdisha Batra. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/navdisha-batra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/nav0901" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="mailto:batra.ku@northeastern.edu" className="text-gray-400 hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}