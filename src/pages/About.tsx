const expertiseItems = [
  "React",
  "Vue.js",
  "TypeScript",
  "Python",
  "Django",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Node.js",
  "Docker",
  "Qt",
  "Java",
  "Spring Boot",
  "Android",
  "iOS",
  "Google Cloud & AWS",
];

export function About() {
  return (
    <div className="min-h-screen bg-white px-10 py-16 max-w-6xl mx-auto mt-8 mb-16">
      <h1 className="text-5xl font-bold mb-10">About Us</h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Sukma Tech Indonesia, we transform complex challenges into
            elegant digital solutions. We specialize in building custom web
            applications, robust backend systems, and innovative desktop
            applications that drive real impact for our clients across
            scientific research, business, and industrial sectors.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-gray-700 leading-relaxed">
                Full-stack web development with modern frameworks like React,
                Vue.js, and Django. From real-time data visualization to complex
                workflow management systems.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                API & Backend Systems
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Scalable REST APIs and backend services using Django REST
                Framework, Node.js, and PostgreSQL with proper authentication
                and data abstraction layers.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Desktop Applications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                High-performance desktop applications using Qt for specialized
                tasks like data analysis, hardware integration, and testing
                automation.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
              <p className="text-gray-700 leading-relaxed">
                Interactive dashboards and charts using ECharts, D3.js, and
                Chart.js to transform complex data into actionable insights.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Enterprise Applications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Enterprise-grade solutions built with Spring Boot, Jakarta EE,
                and microservices architecture. Scalable systems for business
                process automation and integration.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Mobile Applications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Native Android and iOS applications built with platform-specific
                best practices, delivering optimal performance and user
                experience tailored to each operating system.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertiseItems.map((item) => (
              <div
                key={item}
                className="p-4 border border-gray-200 rounded-lg text-center"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Focused</h3>
              <p className="text-gray-700">
                We prioritize code quality, performance, and maintainability in
                every project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-700">
                Agile development process ensuring timely delivery without
                compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-700">
                Experienced developers with deep expertise across multiple
                technologies and domains.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">
            Open Source Contributions
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            We also contribute to the community through open source projects.
          </p>
          <a
            href="https://github.com/sukmatechid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Our GitHub Page
            <svg
              className="w-4 h-4 ml-2"
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
        </section>
      </div>
    </div>
  );
}

export default About;
