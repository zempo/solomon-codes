const currentProjects = [
  {
    title: "Aeropolis",
    pics: ["", ""],
    description:
      "Aeropolis provides a live info for thousands of cities around the globe. Discover a city's air quality and location, read its local health news, and browse its wikipedia.",
    tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
    libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/"
  },
  {
    title: "Above the Line",
    pics: ["", ""],
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
    pics: ["", ""],
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
  let container = document.querySelector(".projects-list");
  let input = "";
  // set interval, accumulate a count, load an array of screenshots for projects
  projects.forEach(proj => {
    input += `<li class="project">${proj.title}
    <ul>
    <li>${proj.description}</li>
    <li>Tech: ${proj.tech.join("")}</li>
    <li>Libraries: ${proj.libs.join("")}</li>
    <li>Source Code: 
    <a href="${proj.repo}" target="_blank" rel="noopener noreferrer">
    Here
    </a>
    </li>
    <li>Live App: 
    <a href="${proj.live}" target="_blank" rel="noopener noreferrer">
    Here
    </a>
    </li>
    </ul>
    </li>`;
  });
  container.innerHTML = input;
};

var TextCarousel = function(el, toRotate, duration) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.duration = parseInt(duration, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TextCarousel.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.duration;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function runCarousel() {
  var elements = document.getElementsByClassName("txt-carousel");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var duration = elements[i].getAttribute("data-duration");
    if (toRotate) {
      new TextCarousel(elements[i], JSON.parse(toRotate), duration);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-carousel > .wrap { border-right: 0.08em solid #000 }";
  document.body.appendChild(css);
}

runCarousel();
loadProjects(currentProjects);
