class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="navbar">
        <div class="bar-container">
          <a class="logo" href="">
            <p>Sebal</p>
          </a>
          <ul class="nav-desktop">
            <li><a href="">Home</a></li>
            <li><a href="#/favorite">Products</a></li>
            <li><a href="#/favorite">Store</a></li>
            <li><a href="https://www.linkedin.com/in/muammarbahalwan/" target="_blank" rel="noreferrer">About Us</a></li>
            <button class="dashboard" onclick="location.href='#/favorite'">Dashboard</button>
          </ul>
          <button id="hamburger" aria-label="navbar" tabindex="0">☰</button>
        </div>
        <div id="drawer">
          <ul class="nav-mobile">
            <li><a href="">Home</a></li>
            <li><a href="#/favorite">Products</a></li>
            <li><a href="#/favorite">Store</a></li>
            <li><a href="https://www.linkedin.com/in/muammarbahalwan/" target="_blank" rel="noreferrer">About Us</a></li>
            <button class="dashboard" onclick="location.href='#/favorite'">Dashboard</button>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
