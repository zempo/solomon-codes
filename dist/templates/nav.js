window.onload = () => {
  let nav = `<nav>
    <div class="logo-link">
      <a href="index.html">Logo</a>
    </div>
    <div class="menu">
      <div class="menu-icon">
        &#9776;
      </div>
      <div class="menu-items">
        <ul>
          <li><a href="#about">Blog</a></li>
          <li><a href="#snippets_lab">Generators</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
    </nav>`;

  let head = document.querySelector(".portfolio-header");
  head.innerHTML = nav;
};