import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <div className="relative w-96 h-96 mx-auto mb-8">
            <Image
              src="https://placehold.co/800x800/1a1a1a/ffffff/png?text=Profile"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-blue-500"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Data-Driven Solutions for Business Growth
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I transform complex data into actionable insights, helping businesses make informed decisions
            through data analysis, visualization, and strategic recommendations.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 