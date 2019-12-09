const currentProjects = [
  {
    title: "Aeropolis",
    description:
      "Aeropolis provides a live info for thousands of cities around the globe. Discover a city's air quality and location, read its local health news, and browse its wikipedia.",
    tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
    libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/"
  },
  {
    title: "Above the Line",
    description:
      "Above the Line helps users create and download their own scripts/screenplays -- while taking care of the formatting. You can even customize your account's appearance whenever you want!",
    tech: [
      "React, ",
      "Hooks and Context API, ",
      "jwt authentication, ",
      "Node, ",
      "Express, ",
      "PostgreSQL, ",
      "Knex, ",
      "Jest, ",
      "and Mocha"
    ],
    libs: ["ReactPDF ", "and React Resizeable"],
    repo: "https://github.com/zempo/jto-client",
    live: "https://above-the-line.now.sh/"
  },
  {
    title: "Just the Occasion",
    description:
      "jtO transforms greeting cards into a personal and social experience. You can create, react to, and customize your own greeting cards within minutes.",
    tech: [
      "React, ",
      "Hooks and Context API, ",
      "jwt authentication, ",
      "Node, ",
      "Express, ",
      "PostgreSQL, ",
      "Knex, ",
      "Jest, ",
      "and Mocha"
    ],
    libs: [
      "Cloudinary, ",
      "Amazon's Image Moderation AI, ",
      "and React to Print"
    ],
    repo: "https://github.com/zempo/jto-client",
    live: "https://just-the-occasion.netlify.com/"
  }
];

const loadProjects = projects => {
  // {
  //     title: "Aeropolis",
  //     description:
  //       "Aeropolis provides a live info for thousands of cities around the globe. Discover a city's air quality and location, read its local health news, and browse its wikipedia.",
  //     tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
  //     libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
  //     repo: "https://github.com/zempo/aeropolis",
  //     live: "https://zempo.github.io/Aeropolis/"
  //   }
  let container = document.querySelector(".projects-list");
  let input = "";
  projects.forEach(proj => {
    input += `<li class="project">${proj.title}
    <ul>
    <li>${proj.description}</li>
    <li>Tech: ${proj.tech.join("")}</li>
    <li>Libraries: ${proj.libs.join("")}</li>
    </ul>
    </li>`;
  });
  container.innerHTML = input;
};

loadProjects(currentProjects);
