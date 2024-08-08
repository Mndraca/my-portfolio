import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="mt-4 sm:mt-0">
      <a
        href="/resume.pdf"
        download="Milena_Komnenic_Resume.pdf"
        className="bg-red-300 text-white py-1 px-2 rounded hover:bg-pink-400 block sm:inline-block"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
