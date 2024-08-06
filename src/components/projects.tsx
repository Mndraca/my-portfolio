// src/components/Projects.js
import React, { FC } from 'react';
import './layout.css';

const Projects: FC = () => {
  return (
    <section id="projects" className='my-10 p-2 '>
      <h2 className='text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-200 to-rose-500'>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3 className='font-bold text-xl mb-4'>Book Review App</h3>
          <p className='mb-4'>Book Review App is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. </p>
          <a href={'https://mndraca.github.io/BookReview-/'} target="_blank" className='text-pink-400' style={{ textDecoration: 'none'}}>Look here</a>
        </div>
        <div className="project">
          <h3 className='font-bold text-xl mb-4'>Fitness Tracker</h3>
          <p className='mb-4'>A fitness tracking app is a mobile application designed to help users monitor and manage their physical activity, health metrics, and wellness goals.</p>
          <a href={'https://sdzika.github.io/workout-logging-form/'} target="_blank" className='text-pink-400' style={{ textDecoration: 'none'}}>Look here</a>
        </div>
        <div className="project">
          <h3 className='font-bold text-xl mb-4'>Sita Dini Magazine</h3>
          <p className='mb-4'>Lifestyle journalism covers travel, fashion, fitness, leisure, food, and arts, among other topics.</p>
          <a href={'https://mndraca.github.io/sitadini/'}  target="_blank" className='text-pink-400' style={{ textDecoration: 'none'}}>Look here</a>
        </div>
        <div className="project">
          <h3 className='font-bold text-xl mb-4'>Multi-Function Web Tool</h3>
          <p className='mb-4'>The App can calculate and display the factorial of a number, reverse a given word, convert text to uppercase,looping constructs through a sequence.</p>
          <a href={''} target="_blank" className='text-pink-400' style={{ textDecoration: 'none',}}>Look here</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
