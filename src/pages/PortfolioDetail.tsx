import { Link, useParams } from "react-router-dom";
import { projects } from "../stores/projects";
import { useState } from "react";

function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [imageError, setImageError] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-white px-10 py-20 max-w-5xl mx-auto mt-4 mb-16">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link
          to="/portfolio"
          className="group inline-flex items-center mb-8 text-gray-600 transition-all"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-10 py-20 max-w-6xl mx-auto mt-4 mb-16">
      <Link
        to="/portfolio"
        className="group inline-flex items-center mb-8 text-gray-600 transition-all"
      >
        <svg
          className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Portfolio
      </Link>

      <h1 className="text-5xl font-bold mb-10">{project.title}</h1>

      {project.image && (
        <div className="w-full aspect-[3360/1694] bg-gray-100 rounded-2xl overflow-hidden mb-16 hover:shadow-md border border-gray-200 max-h-[520px] transition-shadow cursor-pointer">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">Image unavailable</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Results & Impact</h2>
        <ul className="space-y-3">
          {project.results.map((result, index) => (
            <li key={index} className="text-gray-700 text-lg leading-relaxed">
              {result}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Customers</h2>
        <ul className="space-y-3">
          {project.customers.map((customer, index) => (
            <li key={index} className="text-gray-700 text-lg leading-relaxed">
              {customer}
            </li>
          ))}
        </ul>
      </div>

      {project.link && (
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition font-medium"
          >
            View Project
          </a>
        </div>
      )}
    </div>
  );
}

export default PortfolioDetail;
