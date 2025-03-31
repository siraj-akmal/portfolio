import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <div className="relative w-96 h-96 mx-auto mb-8">
            <Image
              src="/images/profile.JPG"
              alt="Profile picture"
              width={96}
              height={96}
              className="rounded-full border-4 border-blue-500 mx-auto"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Siraj Akmal&apos;s Website
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Hi! I&apos;m Siraj Akmal. I study Data Science and Business at Northeastern University. I created this website as a side project! Feel free to explore and let me know if you find any bugs!
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