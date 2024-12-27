import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero: React.FC = () => {
  const heading = useRef();

  useGSAP(() => {
    gsap.from(heading.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".link", {
      opacity: 0,
      duration: 1,
      stagger: 0.45,
    });
    gsap.from(".main-name", {
      opacity: 0,
      duration: 1,
      y: -100,
      scale: 0.5,
      delay: 0.5,
    });
    gsap.from(".desc", {
      scale: 2,
      opacity: 0.4,
      duration: 1,
    });
    gsap.from(".contact", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <header className="py-20 text-center text-white bg-gradient-to-r from-blue-500 to-teal-400">
      <nav className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        <div
          ref={heading}
          className="hidden text-2xl font-bold fade-in sm:inline-block"
        >
          Lalit's Portfolio
        </div>
        <div className="inline-block text-2xl font-bold md:hidden"></div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-200 link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-200 link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-200 link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-200 link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-12">
        <h1 className="text-4xl font-bold md:text-6xl animate__animated animate__fadeIn main-name">
          Hi, I'm Lalit
        </h1>
        <p className="mt-4 text-xl desc md:text-2xl">
          A Passionate Frontend Developer
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 mt-6 font-semibold text-blue-500 transition bg-white rounded-full contact hover:bg-gray-200"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Hero;
