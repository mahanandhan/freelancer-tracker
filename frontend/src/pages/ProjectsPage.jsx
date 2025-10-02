import React, { useState } from 'react';

// Project data with categories
const projects = [
  {
    id: 1,
    title: 'Product UI Presentation',
    img: 'https://via.placeholder.com/200x120',
    categories: ['UI/UX', 'Web Development'],
  },
  {
    id: 2,
    title: 'Custom Visualization',
    img: 'https://via.placeholder.com/200x120',
    categories: ['UI/UX', 'Video Editing'],
  },
  {
    id: 3,
    title: 'Team Collaboration',
    img: 'https://via.placeholder.com/200x120',
    categories: ['Web Development'],
  },
];

// Available categories
const allCategories = ['UI/UX', 'Video Editing', 'Web Development'];

const ProjectsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter projects based on selected categories
  const filteredProjects =
    selectedCategories.length === 0
      ? projects
      : projects.filter((project) =>
          project.categories.some((category) =>
            selectedCategories.includes(category)
          )
        );

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Post Projects</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            + Add Project
          </button>
        </div>
        {/* Categories checkboxes */}
        <div className="flex gap-6 mb-6">
          {allCategories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                className="form-checkbox"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
        {/* Grid of filtered projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
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
              <div className="mb-3">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-1 mr-2 bg-gray-200 rounded text-xs text-gray-600"
                  >
                    {cat}
                  </span>
                ))}
              </div>
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
