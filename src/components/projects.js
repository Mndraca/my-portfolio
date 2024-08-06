// src/components/Projects.js
import React from 'react';
import './layout.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Book Review App</h3>
          <p>Book Review App is a form of literary criticism in which a book is merely described or analyzed based on content, style, and merit. </p>
          <a href={'https://mndraca.github.io/BookReview-/'} target="_blank" style={{ textDecoration: 'none', color: 'pink'}}>Look here</a>
        </div>
        <div className="project">
          <h3>Fitness Tracker</h3>
          <p>A fitness tracking app is a mobile application designed to help users monitor and manage their physical activity, health metrics, and wellness goals.</p>
          <a href={'https://sdzika.github.io/workout-logging-form/'} target="_blank" style={{ textDecoration: 'none', color: 'pink'}}>Look here</a>
        </div>
        <div className="project">
          <h3>Sita Dini Magazine</h3>
          <p>Lifestyle journalism covers travel, fashion, fitness, leisure, food, and arts, among other topics.</p>
          <a href={'https://mndraca.github.io/sitadini/'}  target="_blank" style={{ textDecoration: 'none', color: 'pink'}}>Look here</a>
        </div>
        <div className="project">
          <h3>Multi-Function Web Tool</h3>
          <p>The App can calculate and display the factorial of a number, reverse a given word, convert text to uppercase,looping constructs through a sequence.</p>
          <a href={''} target="_blank" style={{ textDecoration: 'none', color: 'pink'}}>Look here</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
