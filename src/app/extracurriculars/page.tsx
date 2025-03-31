'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ActivityCard = ({ title, description, imageUrl, tags, index }: {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ExtracurricularsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Extracurricular Activities
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ActivityCard
          title="Data Science Club"
          description="Led weekly workshops on machine learning and data analysis techniques, helping members develop practical skills."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Data+Science"
          tags={["Leadership", "Teaching", "Machine Learning"]}
          index={0}
        />
        <ActivityCard
          title="Business Analytics Society"
          description="Organized industry networking events and case study competitions to bridge academic and professional worlds."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Business+Analytics"
          tags={["Event Planning", "Networking", "Case Studies"]}
          index={1}
        />
        <ActivityCard
          title="Tech Innovation Hub"
          description="Co-founded a student-led initiative to explore emerging technologies and their business applications."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Innovation"
          tags={["Innovation", "Technology", "Project Management"]}
          index={2}
        />
        <ActivityCard
          title="Data Visualization Workshop"
          description="Conducted hands-on workshops teaching effective data visualization techniques using modern tools."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Data+Viz"
          tags={["Teaching", "Data Visualization", "Workshop"]}
          index={3}
        />
        <ActivityCard
          title="Analytics Competition Team"
          description="Led a team of 5 students to win the regional data analytics competition, showcasing practical problem-solving skills."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Competition"
          tags={["Team Leadership", "Competition", "Problem Solving"]}
          index={4}
        />
        <ActivityCard
          title="Research Symposium"
          description="Organized an annual symposium bringing together industry experts and students to discuss data science trends."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Research"
          tags={["Event Management", "Research", "Networking"]}
          index={5}
        />
      </div>
    </div>
  );
} 