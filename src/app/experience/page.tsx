'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ExperienceCard = ({ title, company, period, responsibilities, isLeft, isCurrent }: {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  isLeft: boolean;
  isCurrent: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 50
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative" ref={ref}>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ${
            isCurrent ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
      <motion.div 
        className={`${isLeft ? 'w-5/12 pr-8' : 'ml-auto w-5/12 pl-8'}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{company} • {period}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {responsibility}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Journey
      </motion.h1>
      <div className="relative">
        {/* Road line */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Road stops */}
        <div className="space-y-24">
          <ExperienceCard
            title="Senior Data Analyst"
            company="Current Company"
            period="2022 - Present"
            responsibilities={[
              "Led development of key features and improvements",
              "Mentored junior analysts and conducted code reviews",
              "Collaborated with cross-functional teams to deliver high-quality solutions"
            ]}
            isLeft={false}
            isCurrent={true}
          />

          <ExperienceCard
            title="Data Analyst"
            company="Previous Company"
            period="2020 - 2022"
            responsibilities={[
              "Developed and maintained data analysis pipelines",
              "Implemented data visualization dashboards",
              "Worked on both data analysis and reporting tasks"
            ]}
            isLeft={true}
            isCurrent={false}
          />

          <ExperienceCard
            title="Junior Data Analyst"
            company="First Company"
            period="2018 - 2020"
            responsibilities={[
              "Started my professional journey in data analysis",
              "Learned and applied best practices in data analysis",
              "Contributed to various projects under senior analyst guidance"
            ]}
            isLeft={false}
            isCurrent={false}
          />

          <ExperienceCard
            title="Data Science Intern"
            company="Tech Startup"
            period="2017 - 2018"
            responsibilities={[
              "Assisted in developing machine learning models for customer behavior prediction",
              "Created automated data processing scripts using Python",
              "Participated in cross-functional team meetings and project planning"
            ]}
            isLeft={true}
            isCurrent={false}
          />

          <ExperienceCard
            title="Business Analytics Intern"
            company="Consulting Firm"
            period="2016 - 2017"
            responsibilities={[
              "Conducted market research and competitive analysis",
              "Developed business intelligence reports using Tableau",
              "Supported senior consultants in client presentations"
            ]}
            isLeft={false}
            isCurrent={false}
          />

          <ExperienceCard
            title="Data Research Assistant"
            company="University Research Lab"
            period="2015 - 2016"
            responsibilities={[
              "Assisted in data collection and analysis for research projects",
              "Developed statistical models using R and Python",
              "Presented findings at research seminars"
            ]}
            isLeft={true}
            isCurrent={false}
          />
        </div>
      </div>
    </div>
  );
} 