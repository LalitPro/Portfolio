import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src="./images/favicon.png" className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold">DripCart</h3>
            <p className="mt-2 text-gray-600">
              A modern e-commerce site with login and signup integration.
            </p>
            <a
              href="https://dripcart.netlify.app"
              target="_blank"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Project 1 ends */}
          {/* Project 2 */}
          <div className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src="./images/icon.png" className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold">Wordle4u</h3>
            <p className="mt-2 text-gray-600">
              A intresting word game to exercise your brain.
            </p>
            <a
              href="https://wordle4u.netlify.app"
              target="_blank"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Project 2 ends */}
          {/* Project 3 */}
          <div className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src="./images/logo.webp" className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold">LTodo</h3>
            <p className="mt-2 text-gray-600">
              A Todo list app with local storage support.
            </p>
            <a
              href="https://ltodo.netlify.app"
              target="_blank"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Project 3 ends */}
          {/* Project 4 */}
          <div className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src="./images/ox.png" className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold">Tic Tac Toe</h3>
            <p className="mt-2 text-gray-600">
              A Tic Tac Toe game to play with your dears.
            </p>
            <a
              href="https://oxdigital.netlify.app"
              target="_blank"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Project 4 ends */}
          {/* Project 5 */}
          <div className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img src="./images/note.webp" className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold">NotiPad</h3>
            <p className="mt-2 text-gray-600">
              A Note Taking app with firebase integration. Which saves your
              notes and you can access them from anywhere by logiiing in.
            </p>
            <a
              href="https://oxdigital.netlify.app"
              target="_blank"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Project 5 ends */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
