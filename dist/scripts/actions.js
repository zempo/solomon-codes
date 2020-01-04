let contactBtn = document.querySelector(".contact-btn");
let resumeBtn = document.querySelector(".resume-btn");

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

// const linkTxt = [];
let navMenu = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-link a");
let aboutSection = document.getElementById("about");
function resizeNav() {
  // lower than 80 and if a particular class exists
  if (
    document.body.scrollTop > aboutSection.offsetTop - 80 ||
    document.documentElement.scrollTop > aboutSection.offsetTop - 80
  ) {
    navMenu.classList.add("menu-scroll");
    navLinks.forEach((node, i) => {
      node.innerHTML = "..";
    });
  } else {
    navMenu.classList.remove("menu-scroll");
    navLinks.forEach((node, i) => {
      let anchorVal;
      let start = node.href.indexOf("#") + 1;
      anchorVal = node.href.slice(start);
      node.innerHTML = anchorVal;
      // linkTxt.forEach(txt => {
      //   console.log(txt, node.innerHTML);

      // });
    });
  }
}

window.onload = e => {
  scrollTo();
};

window.onscroll = e => {
  resizeNav();
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
