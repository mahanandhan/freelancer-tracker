import React, { useState, useEffect } from "react";

// Dummy Navbar component for a complete, runnable example
const Navbar = () => (
    <div className="flex justify-between items-center h-16 px-6 bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-100">
        <div className="text-xl font-bold text-[#2a3153]">Dashboard</div>
        <div className="flex items-center space-x-4">
            <button className="text-[#2a3153] hover:text-[#718cff]"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            <img src="https://i.pravatar.cc/300?img=1" alt="User Avatar" className="h-8 w-8 rounded-full border-2 border-[#718cff]" />
        </div>
    </div>
);


const initialProjects = [
    { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", title: "Project 1", desc: "Project short description and a long text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula elit lectus, sit amet dignissim enim fringilla eu. Pellentesque ut quam a erat imperdiet iaculis." },
    { img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", title: "Project 2", desc: "Short desc for Project 2" },
    { img: "https://images.unsplash.com/photo-1461711201030-1ff90ae7b250?auto=format&fit=crop&w=400&q=80", title: "Project 3", desc: "Project 3 description sample." },
    { img: "https://images.unsplash.com/photo-1520962911457-0f6f3b8c6f09?auto=format&fit=crop&w=400&q=80", title: "Deployment Project", desc: "Details about deployment project." },
    { img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", title: "Backend Project", desc: "Backend related project details." },
    { img: "https://images.unsplash.com/photo-1522569940756-6a374ca99fa7q=80", title: "Sidebar Setup Project", desc: "Sidebar and setup description." },
    { img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80", title: "Project 7", desc: "Further project information and notes." },
    { img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80", title: "Project 8", desc: "Additional details of project eight, long enough to test scrolling in popup." },
    { img: "https://images.unsplash.com/photo-1486308510493-cb77f3ca8b53?auto=format&fit=crop&w=400&q=80", title: "Project 9", desc: "Brief description for the ninth project." },
    { img: "https://images.unsplash.com/photo-1494522328170-e1852f5263b9?auto=format&fit=crop&w=400&q=80", title: "Project 10", desc: "Ten's summary with relevant project info." },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", title: "Project 11", desc: "Eleventh project has sufficient details for testing." },
    { img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80", title: "Project 12", desc: "Project twelve includes important information and lengthy notes to test popup scrolling capability." }
];

const categories = [
    { name: "Category", key: "Category" },
    { name: "Deployment", key: "Deployment" },
    { name: "Backend", key: "Backend" },
    { name: "Sidebar", key: "Sidebar" }
];

const PROJECTS_PER_PAGE = 6; // Changed to 6 to better match the 3x2 visible grid in the image

const TotalProjects = () => {
    const [projects] = useState(initialProjects);
    const [popupIdx, setPopupIdx] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ Category: false, Deployment: false, Backend: false, Sidebar: false });

    // Custom hook for handling clicks outside the popup (optional but good practice)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (popupIdx !== null && !event.target.closest('.project-card')) {
                // Check if the click is outside any project card (where the popup is rendered)
                // This is a rough check, a more robust solution would use a Ref on the popup itself
                // For this example, we'll keep the close button logic simple as in your original code
                // setPopupIdx(null); 
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [popupIdx]);


    const filteredProjects = projects.filter(project => {
        // If no filter is checked, show all projects
        if (!Object.values(filters).some(Boolean)) return true;
        
        // Otherwise, show projects whose title includes any of the checked filter keys
        return Object.entries(filters).some(([key, checked]) => checked && project.title.includes(key));
    });

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

    // Reset to page 1 if filters change or current page is now out of bounds
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1);
        }
    }, [totalPages, currentPage]);

    const startIdx = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIdx, startIdx + PROJECTS_PER_PAGE);

    const toggleFilter = key => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
        setCurrentPage(1); // Reset to page 1 when filter changes
        setPopupIdx(null); // Close popup when filter changes
    };

    return (
        // 1. Overall Container: Use a background gradient to simulate the glow/environment
        <div className="flex flex-col font-sans min-h-screen bg-gradient-to-br from-[#e0e7ff] to-[#f3e5f5] p-6">
            <div className="fixed inset-x-0 top-0 z-40 w-full">
                <Navbar />
            </div>
            {/* 1. Main Content Wrapper: Add the frosted glass effect */}
            <div className="mt-16 flex flex-1 p-0 rounded-[30px] shadow-2xl overflow-hidden bg-white/70 backdrop-blur-3xl border border-white/50">

                {/* 2. Sidebar Styling */}
                <aside className="w-60 bg-[#2a3153]/90 text-white py-8 px-6 flex flex-col">
                    <h1 className="text-2xl mb-12 font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#718cff]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM10 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM10 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" /></svg>
                        Project
                    </h1>
                    <div className="flex flex-col gap-5 overflow-auto pr-1">
                        {/* Static "Project" link */}
                        <div className="flex items-center gap-3 cursor-pointer text-sm font-semibold text-[#718cff] bg-[#3a4369] rounded-lg p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            <span className="ml-1">Project</span>
                        </div>

                        {/* Category Checkboxes */}
                        {categories.map(({ name, key }) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer text-sm font-medium hover:text-[#718cff] transition-colors">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#718cff]" checked={filters[key]} onChange={() => toggleFilter(key)} />
                                {name}
                            </label>
                        ))}
                    </div>
                </aside>
                <main className="flex-1 px-8 py-10 max-h-[calc(100vh-64px)] overflow-auto">
                    {/* Search/User bar is already handled by the dummy Navbar */}
                    
                    {/* 3. Project Card Grid */}
                    <div className="grid grid-cols-3 gap-7">
                        {currentProjects.map((project, idx) => {
                            const actualIdx = startIdx + idx;
                            const isPopupOpen = popupIdx === actualIdx;
                            return (
                                <div key={actualIdx} className="relative project-card">
                                    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${isPopupOpen ? 'opacity-30' : 'opacity-100'}`}>
                                        <img src={project.img} alt="Project" className="h-44 w-full object-cover" />
                                        <div className="px-5 py-3 flex justify-between items-center">
                                            {/* Button 1: Accept */}
                                            <button className="bg-white border-2 border-[#718cff] text-[#2a3153] font-semibold rounded-full px-5 py-2 transition hover:bg-[#718cff] hover:text-white hover:shadow-md text-sm">
                                                Accept
                                            </button>
                                            {/* Button 2: View Details */}
                                            <button
                                                className="bg-[#718cff] text-white font-semibold rounded-full px-5 py-2 ml-2 transition hover:bg-[#566ddb] shadow-md text-sm"
                                                onClick={() => setPopupIdx(actualIdx)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                    {/* 4. Popup Styling & Positioning (Exact match to image) */}
                                    {isPopupOpen && (
                                        <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl w-[90%] p-5 border border-white/70 flex flex-col max-h-[90%] overflow-y-auto">
                                            <img src={project.img} alt="Popup Project" className="rounded-xl mb-4 h-20 w-full object-cover" />
                                            <p className="text-[#2a3153] mb-4 text-sm leading-relaxed">{project.desc}</p>
                                            <button className="self-end bg-[#718cff] text-white font-semibold rounded-full px-7 py-2 transition hover:bg-[#566ddb] shadow-md text-sm" onClick={() => setPopupIdx(null)}>
                                                Close
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* 5. Pagination Styling */}
                    <div className="flex justify-center mt-10">
                        {/* Previous Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                            className="w-10 h-10 mx-1 flex items-center justify-center rounded-full bg-white text-[#2a3153] font-bold border border-gray-300 transition-colors disabled:opacity-50 hover:bg-gray-100" 
                            disabled={currentPage === 1}
                        >
                            {'<'}
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                            <button 
                                key={num} 
                                onClick={() => setCurrentPage(num)} 
                                className={`w-10 h-10 mx-1 flex items-center justify-center rounded-full font-bold transition-colors ${num === currentPage ? 'bg-[#718cff] text-white shadow-lg' : 'bg-white text-[#2a3153] border border-gray-300 hover:bg-gray-100'}`}
                            >
                                {num}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                            className="w-10 h-10 mx-1 flex items-center justify-center rounded-full bg-white text-[#2a3153] font-bold border border-gray-300 transition-colors disabled:opacity-50 hover:bg-gray-100" 
                            disabled={currentPage === totalPages}
                        >
                            {'>'}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TotalProjects;