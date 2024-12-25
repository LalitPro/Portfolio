import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
        <div className="text-2xl font-bold">Lalit's Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-200">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-12">
        <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeIn">
          Hi, I'm Lalit
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          A Passionate Frontend Developer
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Hero;
