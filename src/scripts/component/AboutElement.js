class AboutElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="" class=" lazyload">
        <div class="">
          <h1>SEBAL</h1>
          <p>Miliki Tanpa Beli!</p>
        </div>
      </section>
    `;
  }
}

customElements.define('about-element', AboutElement);
