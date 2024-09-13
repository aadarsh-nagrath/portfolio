import React from 'react';
import no_image from "../../../public/no-img.png";

interface ProjectCardProps {
  p_name: string;
  p_description: string;
  p_url: string;
}

const capitalizeFirstLetter = (text: string) => {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ProjectCard: React.FC<ProjectCardProps> = ({ p_name, p_description, p_url }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
      {/* Image with overlay */}
      <div className="relative">
        <img
          src={no_image.src || 'fallback-image.png'}
          alt={p_name}
          className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="text-white text-center px-6 py-3 bg-black bg-opacity-75 rounded-md shadow-lg">{p_description}</p>
        </div>
      </div>
      
      <div className="p-6">
        {/* Project Heading */}
        <h2 className="text-[20px] font-extrabold text-gray-900 mb-4 transition-transform transform hover:translate-x-1 hover:text-blue-600">
          {capitalizeFirstLetter(p_name)}
        </h2>
        {/* View Project Button */}
        <a
          href={p_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
