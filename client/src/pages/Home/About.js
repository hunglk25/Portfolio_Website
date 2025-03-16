import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle';

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  if (loading || !portfolioData?.data?.abouts) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const about = portfolioData.data.abouts[0];
  const { description1, description2, skills } = about;

  // Chuyển đổi `skills` thành mảng nếu nó là một chuỗi
  const skillsArray = typeof skills === 'string' ? skills.split(',') : skills;

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="flex flex-col gap-5 w-full sm:w-full">
          <p className="text-white">{description1 || ''}</p>
          <p className="text-white">{description2 || ''}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl font-semibold">
          Here are a few technologies I've been working with recently
        </h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {Array.isArray(skillsArray) && skillsArray.length > 0 ? (
            skillsArray.map((skill, index) => (
              <div className="border border-tertiary text-white py-2 px-6 rounded-md" key={index}>
                {skill.trim()}
              </div>
            ))
          ) : (
            <p className="text-white">No skills available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
