import { Link } from "react-router-dom";
import { projects } from "../stores/projects";
import { useState } from "react";

export function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <div className="min-h-screen bg-white px-10 py-16 max-w-6xl mx-auto mt-8 mb-16">
      <h1 className="text-5xl font-bold mb-10">Our Portfolio</h1>
      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mb-16">
        Here are some of the impactful digital products we've crafted for
        clients across industries. Each project reflects our commitment to
        quality, performance, and thoughtful design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/portfolio/${project.slug}`}
            className="group p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition-all duration-300 block"
          >
            <h3 className="text-2xl font-semibold mb-3  transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="h-40 bg-gray-200 rounded-xl overflow-hidden mb-4">
              {project.image && !imageErrors[project.slug] ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={() => handleImageError(project.slug)}
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="inline-flex items-center text-sm text-gray-600 transition-colors">
              View Details
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
