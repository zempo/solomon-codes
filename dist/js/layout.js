const currentProjects = [
  {
    title: "Above the Line",
    pics: ["atl-1.png", "atl-2.png"],
    description:
      " helps users create and download their own scripts/screenplays -- and handles the formatting. You can even customize your homepage and organize your scripts.",
    tech: [
      "React.js (Hooks & Context), ",
      "JWT auth, ",
      "Node.js (Express), ",
      "PostgreSQL (Knex), ",
      "Jest, ",
      "Mocha, and",
      " Zeit"
    ],
    libs: ["ReactPDF ", "and React Resizeable"],
    repo: "https://github.com/zempo/jto-client",
    live: "https://above-the-line.now.sh/"
  },
  {
    title: "Just the Occasion",
    pics: ["jto-1.png", "jto-2.png"],
    description:
      " transforms greeting cards into a personal and social experience. You can create, react to, and customize greeting cards within minutes.",
    tech: [
      "React.js (Hooks & Context), ",
      "JWT auth, ",
      "Node.js (Express), ",
      "PostgreSQL (Knex), ",
      "Jest, ",
      "Mocha, and",
      " Netlify"
    ],
    libs: ["Cloudinary, ", "AWS Image Moderation, ", "and React to Print"],
    repo: "https://github.com/zempo/jto-client",
    live: "https://just-the-occasion.com/"
  },
  {
    title: "Aeropolis",
    pics: ["air-1.png", "air-2.png"],
    description:
      " provides live air quality values for thousands of cities around the globe. Discover a city's air quality, read local health news, and browse the wikipedia.",
    tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
    libs: ["AirVisual, ", "Leaflet.js, ", "News API, and ", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/"
  }
];

const currentSnippets = [
  {
    type: "animation",
    title: "Cloudy Landing Page",
    link: "https://codepen.io/zemposPen/pen/bGNQmgX"
  },
  {
    type: "article",
    title: "Expedite your Eurekas",
    link:
      "https://medium.com/@solomonzelenko/expedite-your-eurekas-704d35c7892a"
  },
  {
    type: "animation",
    title: "Just the Occasion Concept",
    link: "https://codepen.io/zemposPen/pen/PowLbBd"
  },
  {
    type: "animation",
    title: "Above the Line Concept",
    link: "https://stackblitz.com/edit/above-the-line-concept"
  },
  {
    type: "animation",
    title: "React Quotes Loader",
    link: "https://stackblitz.com/edit/quote-loader"
  },
  {
    type: "algo",
    title: "Maze Matrices",
    link: "https://repl.it/@zempo1/Mad-Mazes"
  },
  {
    type: "animation",
    title: "React Boilerplate",
    link: "https://github.com/zempo/react-boilerplate"
  },
  {
    type: "algo",
    title: "Memo-ize Fibonacci",
    link: "https://repl.it/@zempo1/memo"
  },
  {
    type: "animation",
    title: "Node Boilerplate",
    link: "https://github.com/zempo/node_boilerplate"
  },
  {
    type: "algo",
    title: "Sort by Date",
    link: "https://repl.it/@zempo1/sort-by-date"
  },
  {
    type: "animation",
    title: "Svelte Boilerplate",
    link: "https://github.com/zempo/svelte-boiler"
  },
  {
    type: "animation",
    title: "Sapper Boilerplate",
    link: "https://github.com/zempo/sapper-boiler"
  }
];

const loadSnippets = snippets => {
  let container = document.querySelector(".snippets-list");
  let input = "";
  snippets.forEach((snip, i) => {
    input += `<li class="snip">
    <h3 class="snip-h">${snip.title}</h3>
    <div class="snip-wrapper-2">
    <div class="snip-wrapper-1">
    <img class="snip-img" src="img/${snip.type}.svg" alt="${snip.type}" info="${snip.link}" />
    <button class="btn-4"><span>View Snippet</span></button>
    </div> 
    </div>
    </li>`;
  });
  container.innerHTML = input;
  let snipImgs = document.querySelectorAll(".snip-img");
  let snipBtns = document.querySelectorAll(".btn-4");

  snipImgs.forEach((sImg, i) => {
    snipBtns[i].addEventListener("click", e => {
      let destination = sImg.getAttribute("info");
      window.open(destination, "_blank");
    });
  });
};

const loadProjects = projects => {
  let container = document.querySelector(".projects-list");
  let input = "";
  projects.forEach((proj, i) => {
    input += `<li class="proj">
    <h2>${proj.title}</h2>
    <div class="proj-img-wrapper-2">
    <div class="proj-img-wrapper-1">
    <img class="proj-img" src="img/${proj.pics[0]}" alt="${proj.title} image"/>
    <button class="btn-2"><span>Learn More</span></button>
    </div>
    </div>
    <ul id="p-info-${i + 1}" class="proj-info">
    <li><b>${proj.title}</b>${proj.description}</li>
    <br/>
    <li><b>Tech:</b> ${proj.tech.join("")}.</li>
    <br/>
    <li><b>Libraries:</b> ${proj.libs.join("")}.</li>
    <br/>
    <li><b>Source Code: </b> 
    <a href="${proj.repo}" target="_blank" rel="noopener noreferrer">
    Here
    </a>
    </li>
    <br/>
    <li><b>Live App: </b> 
    <a href="${proj.live}" target="_blank" rel="noopener noreferrer">
    Here
    </a>
    </li>
    <br/>
    </span>
    <button class="btn-3">
    <span>Hide Text</span> 
    </button> 
    </ul>
    </li>
    <br/>`;
  });
  container.innerHTML = input;
  // projects section
  let projImgs = document.querySelectorAll(".proj-img");
  let projBtns = document.querySelectorAll(".btn-2");
  let projClose = document.querySelectorAll(".btn-3");
  let projInfo = document.querySelectorAll(".proj-info");
  let projSpans = document.querySelectorAll(".btn-2 span");

  projImgs.forEach((pImg, i) => {
    projSpans[i].addEventListener("mouseover", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[1]}`);
    });
    projSpans[i].addEventListener("focus", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[1]}`);
    });
    projBtns[i].addEventListener("click", e => {
      projInfo[i].style.display = "block";
      projInfo[i].classList.add("open-txt");
    });
    projClose[i].addEventListener("click", e => {
      projInfo[i].classList.remove("open-txt");
      projInfo[i].classList.add("close-txt");
      setTimeout(() => {
        projInfo[i].style.display = "none";
        projInfo[i].classList.remove("close-txt");
      }, 350);
    });
    projBtns[i].addEventListener("mouseover", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[1]}`);
    });
    projBtns[i].addEventListener("focus", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[1]}`);
    });
    projBtns[i].addEventListener("mouseout", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[0]}`);
    });
    projBtns[i].addEventListener("blur", e => {
      pImg.setAttribute("src", `img/${currentProjects[i].pics[0]}`);
    });
  });
};

const TextCarousel = function(el, toRotate, duration) {
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

const runCarousel = () => {
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
};

runCarousel();
loadSnippets(currentSnippets);
loadProjects(currentProjects);
