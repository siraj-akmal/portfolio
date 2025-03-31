'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, tags, index }: {
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

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Market Analysis Dashboard"
          description="An interactive dashboard analyzing market trends and providing actionable insights for business decision-making."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Data+Analysis"
          tags={["Python", "Pandas", "Tableau"]}
          index={0}
        />
        <ProjectCard
          title="Customer Churn Prediction"
          description="A machine learning model predicting customer churn with 85% accuracy, helping businesses retain valuable customers."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=ML+Model"
          tags={["Scikit-learn", "XGBoost", "Python"]}
          index={1}
        />
        <ProjectCard
          title="Sales Performance Analysis"
          description="A comprehensive analysis of sales performance with recommendations for improvement and growth strategies."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Business+Analytics"
          tags={["Power BI", "SQL", "Excel"]}
          index={2}
        />
        <ProjectCard
          title="Supply Chain Optimization"
          description="An AI-powered system optimizing supply chain operations and reducing operational costs by 25%."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Supply+Chain"
          tags={["Machine Learning", "Python", "TensorFlow"]}
          index={3}
        />
        <ProjectCard
          title="Financial Risk Assessment"
          description="A predictive model for assessing financial risks and providing early warning signals for potential issues."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Risk+Analysis"
          tags={["R", "Statistical Analysis", "Risk Modeling"]}
          index={4}
        />
        <ProjectCard
          title="Customer Segmentation Analysis"
          description="Advanced customer segmentation using clustering algorithms to improve marketing strategies and customer engagement."
          imageUrl="https://placehold.co/600x400/1a1a1a/ffffff/png?text=Customer+Segmentation"
          tags={["K-means", "Python", "Data Visualization"]}
          index={5}
        />
      </div>
    </div>
  );
} 