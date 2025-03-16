import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);

  const courses = portfolioData.data.courses;

  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/6
                        sm:flex-row sm:overflow-x-scroll sm:w-full
                        h-auto min-h-fit flex-1">
          {courses.map((course, index) => (
            <div
              key={course._id}
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 flex-1">
          <h1 className="text-white">
            {courses[selectedItemIndex].description}
          </h1>
          <a 
            href={courses[selectedItemIndex].link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Course
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Courses;
