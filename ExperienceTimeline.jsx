import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Renegade Insurance",
    role: "Salesforce Engineer Intern",
    period: "2025",
    achievements: [
      "Built AI-powered PDF quote comparison system using Azure Vision AI, reducing manual review time by 70%",
      "Developed custom LWC components and Apex services for intelligent document processing",
      "Integrated Visualforce pages with AI-driven insights for underwriting workflows"
    ]
  },
  {
    company: "Forrester Research",
    role: "Salesforce Engineer Intern",
    period: "2024",
    achievements: [
      "Architected scalable Lightning Web Components for enterprise research platform",
      "Implemented Salesforce Data Cloud integrations for real-time analytics",
      "Optimized Apex triggers and batch processes, improving performance by 40%"
    ]
  },
  {
    company: "Accenture",
    role: "Salesforce Developer",
    period: "2020–2023",
    achievements: [
      "Led development of Financial Services Cloud solutions for Fortune 500 clients",
      "Built CPQ automation workflows processing $10M+ in annual revenue",
      "Designed and deployed custom Apex REST APIs serving 50K+ daily requests"
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}