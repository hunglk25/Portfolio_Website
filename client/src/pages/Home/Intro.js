import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
  const { loading, portfolioData } = useSelector(state => state.root);

  const intro = portfolioData.data.intros[0];

  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div className='h-[40vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>{welcomeText || ''}</h1>
        <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>{firstName || ''} {lastName || ''}</h1>
        <h1 className='text-white text-7xl sm:text-3xl font-semibold'>{caption || ''}</h1>
        <p className='text-white w-2/3'>{description || ''}</p>  
        <button className='border-2 border-tertiary text-tertiary px-10 py-3'>
          Get Start
        </button>
    </div>
  );
}

export default Intro