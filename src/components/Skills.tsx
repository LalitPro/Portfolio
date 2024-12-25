import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-6 py-20 mx-auto text-center max-w-7xl">
      <h2 className="mb-12 text-3xl font-bold">My Skills</h2>
      <div className="space-y-10">
        {/* Frontend Skills */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-blue-500">
            Frontend
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="bg-orange-400 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg"
                alt="HTML5"
                className="skill-icon"
              />
              <span className="skill-label">HTML5</span>
            </div>
            <div className="bg-blue-500 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg"
                alt="CSS3"
                className="skill-icon"
              />
              <span className="skill-label">CSS3</span>
            </div>
            <div className="bg-yellow-400 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg"
                alt="JavaScript"
                className="skill-icon"
              />
              <span className="skill-label">JavaScript</span>
            </div>
            <div className="bg-blue-600 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg"
                alt="TypeScript"
                className="skill-icon"
              />
              <span className="skill-label">TypeScript</span>
            </div>
            <div className="skill-card bg-cyan-500">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg"
                alt="React"
                className="skill-icon"
              />
              <span className="skill-label">React</span>
            </div>
          </div>
        </div>

        {/* Version Control Skills */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-teal-500">
            Version Control
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="bg-gray-700 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg"
                alt="Git"
                className="skill-icon"
              />
              <span className="text-white skill-label">Git</span>
            </div>
            <div className="bg-gray-900 skill-card">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
                alt="GitHub"
                className="skill-icon"
              />
              <span className="text-white skill-label">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
