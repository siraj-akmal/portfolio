'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Incoming Analyst',
    company: 'BlackRock',
    location: 'New York, NY',
    period: 'Aug. 2025 – ???',
    description: [
      'I haven\'t started yet!!'
    ],
    tags: [],
    website: 'https://www.blackrock.com/us/individual'
  },
  {
    title: 'Investment Services Co-op',
    company: 'Arrowstreet Capital L.P.',
    location: 'Boston, MA',
    period: 'Jul. 2024 – Dec. 2024',
    description: [
      'Utilize API and SQL queries to automate the assignment of cash break severity for over 4,000 breaks daily.',
      'Research and assist in the implementation of CLS FX trades, reducing the time to settle foreign exchange transactions.',
      'Optimize the monthly reporting process by developing Python scripts to track and measure KPIs for external vendors.'
    ],
    tags: ['Python', 'SQL', 'Excel'],
    website: 'https://www.arrowstreetcapital.com/'
  },
  {
    title: 'Asian American Heritage Month Co-Chair',
    company: 'NEU Asian American Center',
    location: 'Boston, MA',
    period: 'May 2023 – May 2024',
    description: [
      'Managed over $44,000 budget to create programming for Northeastern University undergraduate student body.',
      'Coordinated with 13 student organizations to plan & manage collaborative, cohesive, & theme-appropriate programs.',
      'Oversaw event logistics, including funds allocation, contract negotiations, content approval, & venue scheduling.'
    ],
    tags: ['Project Management', 'Budgeting'],
    website: 'https://asianamericancenter.northeastern.edu/'
  },
  {
    title: 'Middle Office Analyst Co-op',
    company: 'Man Group',
    location: 'Boston, MA',
    period: 'May 2023 – Dec. 2023',
    description: [
      'Oversaw daily upload of foreign exchange trades for 16 funds; develop SQL queries & automated alerts to preemptively identify & mitigate potential issues.',
      'Calculated net asset value based on internal & custodian bank reporting on a monthly basis.',
      'Assisted in fund merger of $1.85 billion asset base, using Python to identify overlapping securities & ensure compliance.',
      'Updated baseline stock loan fee estimates through Python-based analysis of 1.3 million historical data points.'
    ],
    tags: ['Python', 'SQL'],
    website: 'https://www.man.com/'
  },
  {
    title: 'Finance Intern',
    company: 'Township of West Orange',
    location: 'West Orange, NJ',
    period: 'May 2022 – Aug. 2022',
    description: [
      'Designed compliance model for audit & state records retention requirements based on 14 years of procurement records.',
      'Created SQL database & queries to implement model & allow users to view, search, & update database.',
      'Automated population of database with 238 records using PyMySQL library in Python.'
    ],
    tags: ['Excel', 'Python', 'SQL'],
    website: 'https://www.westorange.org/'
  },
  {
    title: 'Lifeguard',
    company: 'Livingston Township',
    location: 'Livingston, NJ',
    period: 'May 2018 – Aug. 2021',
    description: [
      'Protected the pool!'
    ],
    tags: []
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
        bounce: 0.5,
        duration: 0.5,
        delay: index * 0.1
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
      style={{
        position: 'relative',
        zIndex: experiences.length - index
      }}
    >
      <motion.div
        layout
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div>
          <motion.h3 
            layout
            className="text-xl font-bold text-gray-900 dark:text-white"
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {experience.title}
          </motion.h3>
          <motion.p 
            layout
            className="text-gray-600 dark:text-gray-300"
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {experience.website ? (
              <a 
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                {experience.company}
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            ) : (
              experience.company
            )}
          </motion.p>
        </div>
        <motion.div 
          layout
          className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0"
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {experience.location} • {experience.period}
        </motion.div>
      </motion.div>
      <motion.ul 
        layout
        className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4"
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {experience.description.map((item, i) => (
          <motion.li 
            layout
            key={i}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      {experience.tags && experience.tags.length > 0 && (
        <motion.div 
          layout
          className="flex flex-wrap gap-2"
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {experience.tags.map((tag, i) => (
            <motion.span
              layout
              key={i}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Experience
      </motion.h1>
      <div className="max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
} 