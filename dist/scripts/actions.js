let contactBtn = document.querySelector(".contact-btn");
let resumeBtn = document.querySelector(".resume-btn");
// const linkTxt = [];
let navMenu = document.querySelector(".menu");
let navItems = document.querySelectorAll(".nav-link");
let navLinks = document.querySelectorAll(".nav-link a");
let aboutSection = document.getElementById("about");
let snippetSection = document.getElementById("snippets");
let projectSection = document.getElementById("project");
let contactSection = document.getElementById("contact");

function scrollTo() {
  const links = document.querySelectorAll("nav a");
  links.forEach(each => (each.onclick = scrollToAnchor));
}

function scrollToAnchor(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();

  var targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");

  const targetAnchor = document.querySelector(targetID);

  if (!targetAnchor) return;

  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function getCurrentSection() {
  let aboutLink = document.querySelector('.nav-link a[href*="about"]');
  let snippetLink = document.querySelector('.nav-link a[href*="snippet"]');
  let projectLink = document.querySelector('.nav-link a[href*="project"]');
  let contactLink = document.querySelector('.nav-link a[href*="contact"]');

  if (window.pageYOffset < aboutSection.offsetTop) {
    aboutLink.parentElement.style.backgroundColor = "white";
    snippetLink.parentElement.style.backgroundColor = "white";
    projectLink.parentElement.style.backgroundColor = "white";
    contactLink.parentElement.style.backgroundColor = "white";
  } else if (
    window.pageYOffset >= aboutSection.offsetTop &&
    window.pageYOffset < snippetSection.offsetTop
  ) {
    aboutLink.parentElement.style.backgroundColor = "black";
    snippetLink.parentElement.style.backgroundColor = "white";
    projectLink.parentElement.style.backgroundColor = "white";
    contactLink.parentElement.style.backgroundColor = "white";
  } else if (
    window.pageYOffset >= snippetSection.offsetTop &&
    window.pageYOffset < projectSection.offsetTop
  ) {
    aboutLink.parentElement.style.backgroundColor = "white";
    snippetLink.parentElement.style.backgroundColor = "black";
    projectLink.parentElement.style.backgroundColor = "white";
    contactLink.parentElement.style.backgroundColor = "white";
  } else if (
    window.pageYOffset >= projectSection.offsetTop &&
    window.pageYOffset < contactSection.offsetTop
  ) {
    aboutLink.parentElement.style.backgroundColor = "white";
    snippetLink.parentElement.style.backgroundColor = "white";
    projectLink.parentElement.style.backgroundColor = "black";
    contactLink.parentElement.style.backgroundColor = "white";
  } else {
    aboutLink.parentElement.style.backgroundColor = "white";
    snippetLink.parentElement.style.backgroundColor = "white";
    projectLink.parentElement.style.backgroundColor = "white";
    contactLink.parentElement.style.backgroundColor = "black";
  }
}

function resizeNav() {
  // lower than 80 and if a particular class exists
  if (window.pageYOffset > aboutSection.offsetTop - 10) {
    navMenu.classList.add("menu-scroll");
    navLinks.forEach((node, i) => {
      node.innerHTML = "....";
    });
  } else {
    navMenu.classList.remove("menu-scroll");
    navLinks.forEach((node, i) => {
      let anchorVal;
      let start = node.href.indexOf("#") + 1;
      anchorVal = node.href.slice(start);
      node.innerHTML = anchorVal;
    });
  }
}

window.onload = e => {
  scrollTo();
};

window.onscroll = e => {
  resizeNav();
  getCurrentSection();
};

contactBtn.onclick = e => {
  e.preventDefault();
  window.scrollBy({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
  });
  // console.log(document.body.scrollHeight);
};
