const Project = () => {
  return (
    <div id="project" className="bg-[#222831] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00ADB5]">
          My Projects
        </h1>

          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
              Expertisor Academy
            </h1>
            <p className="text-lg text-[#fff] mb-4">
            Developed a responsive educational platform as a freelance project using React.js and Tailwind CSS, showcasing various courses. The site ensures an intuitive user experience across all devices.
            </p>
            <a
              href="https://initiative.expertisoracademy.in"
              className="text-[#00ADB5] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#00ADB5] font-extrabold text-[32px] mb-4">
              Biobot AI
            </h1>
            <p className="text-lg text-[#fff] mb-4">
              An AI-based platform that optimizes user bio data using the Gemini
              API. Developed with React.js, this app helps users to improve
              their biological data using advanced AI algorithms.
            </p>
            <a
              href="https://biobot-insta-bio-generator.netlify.app/"
              className="text-[#00ADB5] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>


          {/* Cinemax Project */}
          <div className="w-full md:w-1/2 flex flex-col  items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
            Cinemax
            </h1>
            <p className="text-lg text-[#fff] mb-4">
            A movie platform where users can browse movies, view details, and
            ratings. Built using React.js and the TMDb API for movie data.
            </p>
            <a
              href="https://cinemax-moviefinder.netlify.app/"
              className="text-[#00ADB5] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* React Weather App Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#00ADB5] font-extrabold text-[32px] mb-4">
            React Weather App
            </h1>
            <p className="text-lg text-[#fff] mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://your-city-weather-app.netlify.app/"
              className="text-center text-[#00ADB5] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>



          {/* React Weather App Project */}
          <div className="w-full md:w-1/2 flex flex-col  items-center bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#00ADB5] font-extrabold text-[32px] mb-4">
              Bookway
            </h1>
            <p className="text-lg text-[#fff] mb-4">
            Bookway is a dynamic CRUD application built with JavaScript.
            It lets users manage books with add, edit, view, and delete functions.
            Showcases core JS skills, DOM manipulation, and responsive design.
            </p>
            <a
              href="https://bookway.netlify.app/#"
              className="text-[#00ADB5] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Landing Pages Bundle */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#393E46] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#00ADB5] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-[#fff] mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/Gunaseelan123/Impressive-Landing-Page"
              className="text-center text-[#00ADB5] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

      </div>
    </div>
  );
};

export default Project;
