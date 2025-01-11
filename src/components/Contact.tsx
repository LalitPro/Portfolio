import React, { useState } from "react";

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <section id="contact" className="px-6 py-20 mx-auto text-center max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold">Contact Me</h2>
      <p className="mb-8">
        Feel free to reach out to me for any queries or collaborations!
      </p>
      <button
        onClick={() => setShowEmail(!showEmail)}
        className="inline-block px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
      >
        Contact Me
      </button>
      {showEmail && (
        <a
          href="mailto:lalityadavwebdev@gmail.com"
          className="block mt-5 text-2xl"
        >
          lalityadavwebdev@gmail.com
        </a>
      )}
    </section>
  );
};

export default Contact;
