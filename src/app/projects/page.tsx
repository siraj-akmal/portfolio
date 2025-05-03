'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, tags, index, link }: {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  index: number;
  link: string;
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
      <a href={link} target="_blank" rel="noopener noreferrer">
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
      </a>
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
          title="Onboarding RAG Chatbot"
          description="Built a full-stack application that allows users to upload documents, which are automatically chunked and stored in a vector database for semantic search. Integrated an Ollama-hosted local LLM to enable users to ask questions and receive context-aware answers based on the uploaded content."
          imageUrl="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png"
          tags={["Ollama", "AI", "Redis", "Python"]}
          index={0}
          link="https://github.com/siraj-akmal/RAG-onboarding"
        />
        <ProjectCard
          title="Boston Weather Prediction"
          description="We built a weather prediction tool using machine learning and time series models on four years of Boston weather data. An MLP classified rainy days with 83% accuracy, while AR/MA models forecasted monthly rainfall trends. We also created an interactive website to display our findings and visualizations."
          imageUrl="https://res.cloudinary.com/simpleview/image/upload/v1699908801/clients/boston-redesign/6ETOS4g0_c4045e9b-d897-4012-8d4c-4ba218d7a389.jpg"
          tags={["MLP", "Machine","Time Series","Python"]}
          index={1}
          link="https://github.com/adammotts/WeatherPrediction"
        />
        <ProjectCard
          title="AWS Financial Data Pipeline"
          description="Developed an AWS pipeline where users upload company financials via an EC2-hosted dashboard. Files are stored in S3, processed by a Lambda function to compute key metrics, and results are stored in RDS and displayed on the dashboard."
          imageUrl="https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30"
          tags={["AWS", "Streamlit", "Python"]}
          index={2}
          link="https://drive.google.com/file/d/1bSkJN9iD7Zmn94Hxpn-D5jrgc0GpS6Ol/view?usp=sharing"
        />
        <ProjectCard
          title="MLB Player Performance Dashboard"
          description="I built an interactive dashboard to visualize MLB player stats from the 2022 season using Python, JavaScript, HTML, and CSS. Users can compare player performance to all-time records via a warped bar graph shaped like a baseball diamond, with features like player selection, custom profiles, and dropdown options."
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1024px-Major_League_Baseball_logo.svg.png"
          tags={["HTML", "Javascript", "CSS"]}
          index={3}
          link="https://drive.google.com/file/d/1onZ1Rhpgwuzp8mC9aZQ9PkwuUCowRmD0/view?usp=sharing"
        />
        <ProjectCard
          title="NBA Salary Prediction"
          description="Developed an interactive dashboard to predict NBA player salaries using season statistics. Built four regression models with scikit-learn, visualized results with Plotly, and deployed the app using Dash and HTML. Included a salary calculator where users input stats to receive predictions from the best-performing model.."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpEOs03-96oUptCBZu7SJ2tcLslO6pNR6Og&s"
          tags={["Machine Learning", "Python", "Random Forsest Rgression"]}
          index={4}
          link="https://drive.google.com/file/d/1hW6szHNDbxHf2Z-tHUzBBZ7v-3KouKGu/view?usp=sharing"
        />
      </div>
    </div>
  );
}
