import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="px-6 py-20 mx-auto text-center max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold">About Me</h2>
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          Hi, I'm <span className="font-semibold text-blue-500">Lalit</span>, a
          passionate web developer focused on creating interactive and
          user-friendly websites. My journey into the world of technology began
          in 2018, and since then, I've been dedicated to mastering various web
          development technologies.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          I specialize in frontend development and have experience building
          e-commerce sites, interactive applications, and experimenting with
          modern web technologies. I’m especially interested in creating clean,
          efficient, and visually appealing designs that offer a seamless user
          experience.
        </p>
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-semibold text-teal-500">
            Technologies I Use:
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md">
              HTML
            </div>
            <div className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md">
              CSS
            </div>
            <div className="px-4 py-2 text-white bg-yellow-500 rounded-lg shadow-md">
              JavaScript
            </div>
            <div className="px-4 py-2 text-white bg-blue-700 rounded-lg shadow-md">
              TypeScript
            </div>
            <div className="px-4 py-2 text-white rounded-lg shadow-md bg-cyan-500">
              React
            </div>
            <div className="px-4 py-2 text-white bg-gray-600 rounded-lg shadow-md">
              Git
            </div>
            <div className="px-4 py-2 text-white bg-gray-800 rounded-lg shadow-md">
              GitHub
            </div>
            <div className="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md">
              Tailwind CSS
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Outside of coding, I enjoy exploring new technology trends,
            contributing to open-source projects, and diving into graphic design
            and photography. These hobbies help me create more visually
            appealing web designs and stay creative.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m always excited to connect with like-minded developers,
            collaborate on interesting projects, or discuss new tech. Feel free
            to reach out if you'd like to chat or work together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
