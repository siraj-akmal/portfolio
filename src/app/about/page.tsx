import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Personal Portfolio',
  description: 'Learn more about my background in data science and business analytics',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m a data science and business analytics professional with a passion for transforming
              complex data into actionable insights. My expertise lies in developing predictive models,
              creating interactive visualizations, and providing data-driven recommendations to drive
              business growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">
                R
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">
                SQL
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm">
                Tableau
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm">
                Power BI
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">University Name</h3>
                <p className="text-gray-600 dark:text-gray-300">B.S. in Data Science and Business Analytics • 2018 - 2022</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Predictive Analytics and Machine Learning</li>
              <li>Business Intelligence and Data Visualization</li>
              <li>Statistical Analysis and Hypothesis Testing</li>
              <li>Data-Driven Decision Making</li>
              <li>Market Research and Competitive Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 