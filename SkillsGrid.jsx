import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Core Skills",
    skills: [
      "Salesforce (Apex, LWC, Flows)",
      "Experience Cloud",
      "Financial Services Cloud",
      "CPQ",
      "Data Cloud",
      "Agentic AI",
      "LangChain",
      "LlamaIndex",
      "RAG Systems",
      "AstraDB",
      "FAISS",
      "Chroma",
      "Python",
      "JavaScript/Node.js",
      "OpenAI",
      "Vector Databases"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "SFDX CLI",
      "Jenkins",
      "Copado",
      "AutoRABIT",
      "Azure Vision AI",
      "Google Cloud Vision",
      "AWS S3",
      "Postman",
      "Docker",
      "SQL/SOQL",
      "Figma"
    ]
  }
];

export default function SkillsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-sm px-4 py-2 bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}