'use client';

import Image from 'next/image';

export default function Tools() {
  const tools = [
    { name: 'GitHub', image: '/Logos/GitHub.png' },
    { name: 'VS Code', image: '/Logos/Visual Studio Code (VS Code).png' },
    { name: 'AWS', image: '/Logos/AWS.png' },
    { name: 'MongoDB', image: '/Logos/MongoDB.png' },
    { name: 'PostgreSQL', image: '/Logos/PostgresSQL.png' },
    { name: 'Vercel', image: '/Logos/Vercel.png' },
    { name: 'Heroku', image: '/Logos/Heroku.png' },
    { name: 'Postman', image: '/Logos/Postman.png' },
    { name: 'Git', image: '/Logos/Git.png' },
    { name: 'Node.js', image: '/Logos/Node.js.png' },
    { name: 'Express', image: '/Logos/Express.png' },
    { name: 'React', image: '/Logos/React.png' },
    { name: 'Next.js', image: '/Logos/Next.js.png' },
    { name: 'JavaScript', image: '/Logos/JavaScript.png' },
    { name: 'TypeScript', image: '/Logos/TypeScript.png' },
    { name: 'HTML5', image: '/Logos/HTML5.png' },
    { name: 'CSS3', image: '/Logos/CSS3.png' },
    { name: 'Tailwind CSS', image: '/Logos/Tailwind CSS.png' },
    { name: 'Material UI', image: '/Logos/Material UI.png' },
    { name: 'GraphQL', image: '/Logos/GraphQL.png' },
    { name: 'Firebase', image: '/Logos/Firebase.png' },
    { name: 'MySQL', image: '/Logos/MySQL.png' },
    { name: 'Nest.js', image: '/Logos/Nest.js.png' },
    { name: 'Python', image: '/Logos/Python.svg' },
    { name: 'Flask', image: '/Logos/Flask.svg' },
    { name: 'FastAPI', image: '/Logos/FastAPI.svg' },
    { name: 'Vite', image: '/Logos/Vite.js.png' },
    { name: 'NPM', image: '/Logos/NPM.png' },
    { name: 'Linux', image: '/Logos/Linux.png' },
    { name: 'Jira', image: '/Logos/Jira.png' },
    { name: 'Slack', image: '/Logos/Slack.png' },
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've had the pleasure of working with a diverse range of tools and technologies, from development environments to cloud platforms.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedTools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-6 flex flex-col items-center justify-center group"
                  >
                    <div className="w-32 h-32 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 hover:shadow-lg p-4">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={80}
                        height={80}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

