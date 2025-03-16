import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const projects = portfolioData.data.projects;

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/6 
                        sm:flex-row sm:overflow-x-scroll sm:w-full 
                        h-auto min-h-fit flex-1"> 
          {projects.map((project, index) => (
            <div
              key={project._id}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 py-3 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 ml-[3px] bg-[#0d89724e]"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 flex-1">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex]?.title || ""}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {projects[selectedItemIndex]?.technologies || ""}
          </h1>
          <p className="text-white">
            {projects[selectedItemIndex]?.description || ""}
          </p>
          <a 
            href={projects[selectedItemIndex]?.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
