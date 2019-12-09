function initializeLinks() {
  var links = document.querySelectorAll(".nav-link");

  links.forEach(item => {
    item.addEventListener("click", e => {
      console.log(e.target);
    });
  });
}

window.onload = e => {
  initializeLinks();
};
