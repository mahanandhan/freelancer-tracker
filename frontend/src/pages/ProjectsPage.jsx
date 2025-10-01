import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Product UI Presentation',
    img: 'https://via.placeholder.com/200x120', // Replace with real images
  },
  {
    id: 2,
    title: 'Custom Visualization',
    img: 'https://via.placeholder.com/200x120',
  },
  {
    id: 3,
    title: 'Team Collaboration',
    img: 'https://via.placeholder.com/200x120',
  },
];

const ProjectsPage = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      {/* Container Card */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Post Projects</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            + Add Project
          </button>
        </div>

        {/* Grid of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                {project.title}
              </h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                More Options
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
