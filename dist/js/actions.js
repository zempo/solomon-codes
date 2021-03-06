// top buttons
let contactBtn = document.querySelector(".contact-btn");
let resumeBtn = document.querySelector(".resume-btn");
// navigation
let navMenu = document.querySelector(".menu-center");
let navItems = document.querySelectorAll(".nav-link");
let navLinks = document.querySelectorAll(".menu-center .nav-link a");
let aboutSection = document.getElementById("about");
let snippetSection = document.getElementById("snippets");
let projectSection = document.getElementById("projects");
let contactSection = document.getElementById("contact");
// burger
let menuBtn = document.querySelector(".menu-burger");
let burgerLinks = document.querySelectorAll(".menu-burger .nav-link a");
let modalMenu = document.getElementById("menuModal");
let menuContent = document.querySelector(".modal-nav");
let menuClose = document.getElementsByClassName("close-menu")[0];
// Resume
let modal = document.getElementById("resumeModal");
let modalContent = document.querySelector(".modal-content");
let resumeClose = document.getElementsByClassName("close")[0];
// contact form
let contactForm = document.querySelector(".contact-form");
let status = document.querySelector(".form-status");
let email = document.getElementById("email");
let subject = document.getElementById("sub");
let message = document.getElementById("msg");

function scrollTo() {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href.includes("solomonzelenko")) {
      link.onclick = scrollToAnchor;
    }
  });
}

function scrollToAnchor(e, respond = null) {
  modalMenu.style.display = "none";
  menuContent.classList.remove("menu-active");
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();

  var targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");

  const targetAnchor = document.querySelector(targetID);

  if (!targetAnchor) return;

  let originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop + 1, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const getCurrentSection = () => {
  let aboutLink = document.querySelector('.nav-link a[href*="about"]');
  let snippetLink = document.querySelector('.nav-link a[href*="snippet"]');
  let projectLink = document.querySelector('.nav-link a[href*="project"]');
  let contactLink = document.querySelector('.nav-link a[href*="contact"]');

  if (window.pageYOffset < aboutSection.offsetTop - 10) {
    aboutLink.parentElement.style.backgroundColor = "white";
    snippetLink.parentElement.style.backgroundColor = "white";
    projectLink.parentElement.style.backgroundColor = "white";
    contactLink.parentElement.style.backgroundColor = "white";
  } else if (
    window.pageYOffset >= aboutSection.offsetTop - 10 &&
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
    window.pageYOffset < contactSection.offsetTop - 1
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
};

const resizeNav = () => {
  // lower than 80 and if a particular class exists
  if (window.pageYOffset > aboutSection.offsetTop - 10) {
    navMenu.classList.add("menu-scroll");
    navLinks.forEach((node, i) => {
      node.innerHTML = "....";
      let start = node.href.indexOf("#") + 1;
      anchorVal =
        node.href.slice(start, start + 1).toUpperCase() +
        node.href.slice(start + 1);
      node.setAttribute("title", anchorVal);
    });
  } else {
    navMenu.classList.remove("menu-scroll");
    navLinks.forEach((node, i) => {
      let anchorVal;
      let start = node.href.indexOf("#") + 1;
      anchorVal =
        node.href.slice(start, start + 1).toUpperCase() +
        node.href.slice(start + 1);
      node.innerHTML = anchorVal;
      node.setAttribute("title", "");
    });
  }
};

function handleContactForm(e) {
  status.innerHTML = "";
  let eVal = email.value;
  let sVal = subject.value;
  let mVal = message.value;
  let validEmail = eVal.length > 5 && eVal.includes("@") && eVal.includes(".");
  let validSubject = sVal.length >= 3;
  let validMessage = mVal.length >= 5;
  status.classList.remove("warn");
  if (!validEmail && validSubject && validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Please enter your email in this format: <br/> yourname@example.com</p>`;
  } else if (!validEmail && !validSubject && validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Please enter your email in this format: <br/> yourname@example.com</p>
          <p>Subject should be 3+ characters.</p>`;
  } else if (!validEmail && validSubject && !validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Please enter your email in this format: <br/> yourname@example.com</p>
          <p>Message should be 5+ characters.</p>`;
  } else if (!validEmail && !validSubject && !validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Please enter your email in this format: <br/> yourname@example.com</p>
          <p>Subject should be 3+ characters.</p>
          <p>Message should be 5+ characters.</p>`;
  } else if (validEmail && !validSubject && !validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Subject should be 3+ characters.</p>
          <p>Message should be 5+ characters.</p>`;
  } else if (validEmail && validSubject && !validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Message should be 5+ characters.</p>`;
  } else if (validEmail && !validSubject && validMessage) {
    e.preventDefault();
    status.classList.add("warn");
    status.innerHTML = `<p>Subject should be 3+ characters.</p>`;
  } else {
    status.innerHTML = `<p>Your Message Was Sent Successfully! <br/> We'll be in contact, shortly!</p>`;
  }
  setTimeout(() => {
    status.innerHTML = "";
  }, 5000);
}

status.onclick = e => {
  status.innerHTML = "";
};

contactForm.addEventListener("submit", handleContactForm);

window.onload = e => {
  modal.style.display = "none";
  modalContent.classList.remove("modal-active");
  scrollTo();
};

window.onscroll = e => {
  resizeNav();
  getCurrentSection();
};

window.onresize = e => {
  getCurrentSection();
};

contactBtn.onclick = e => {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  contactSection = document.getElementById("contact");
  let originalTop = distanceToTop(contactSection);
  window.scrollBy({
    top: originalTop + 1,
    left: 0,
    behavior: "smooth"
  });
  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(contactSection) === 0 || atBottom) {
      contactSection.tabIndex = "-1";
      contactSection.focus();
      window.history.pushState("", "", "#contact");
      clearInterval(checkIfDone);
    }
  }, 100);
};

menuBtn.onclick = e => {
  e.preventDefault();
  openBurger = true;
  modalMenu.style.display = "block";
  menuContent.classList.add("menu-active");
};

menuClose.onclick = e => {
  openBurger = false;
  modalMenu.style.display = "none";
  menuContent.classList.remove("menu-active");
};

resumeBtn.onclick = e => {
  e.preventDefault();
  modal.style.display = "block";
  modalContent.classList.add("modal-active");
};
resumeClose.onclick = e => {
  modal.style.display = "none";
  modalContent.classList.remove("modal-active");
};
window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalContent.classList.remove("modal-active");
  } else if (e.target == modalMenu) {
    modalMenu.style.display = "none";
    menuContent.classList.remove("menu-active");
  }
};
