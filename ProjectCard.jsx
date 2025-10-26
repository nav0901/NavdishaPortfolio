import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 h-full">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge 
                key={tag}
                variant="outline"
                className="bg-blue-500/10 border-blue-500/30 text-blue-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {project.link && (
            <div className="flex gap-3">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}