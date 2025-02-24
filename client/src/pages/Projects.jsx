import Title from "../components/Title";
import here from "../images/here.png";
import chi from "../images/chi.png";            
import web6 from "../images/web6.png";
import code1 from "../images/code1.png";
import code3 from "../images/code3.png";
import che from "../images/che.png";
import "../App.css";



const Projects = () => {
  const projects = [
    {
      image: here,
      title: "Project Title 1",
      description: "Brief description of the project and technologies used",
      link: "https://project1.com"
    },
    {
      image: chi,
      title: "Project Title 2",
      description: "Brief description of the project and technologies used",
      link: "https://project2.com"
    },
    {
        image: code1,
        title: "Project Title 2",
        description: "Brief description of the project and technologies used",
        link: "https://project2.com"
      },
    
  ];

  return (
    <>
      <div className="flex justify-end pr-8">
        <Title />
      </div>
      <div className="container mx-auto px-4 pt-2 pb-40 min-h-screen bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block group"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="aspect-video overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                  My Project
                  </h3>
                  <p className="text-gray-400">
                  description: "A modern gardening platform built with React and Node.js. Features include plant care guides, seasonal planting calendars, and a community forum for gardening enthusiasts.",
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;