window.onload = () => {
  let nav = `<nav>
    <div class="menu">
      <div class="menu-items">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#snippets">Snippets</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
    </nav>`;

  let head = document.querySelector(".portfolio-header");
  head.innerHTML = nav;
};
