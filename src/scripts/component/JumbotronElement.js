class JumbotronElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="jumbotron" class="jumbotron lazyload">
        <div class="content">
          <h1>SEBAL</h1>
          <p>Miliki Tanpa Beli!</p>
        </div>
        <div class="strip-container">
          <div class="jumbotron-strip">
            <div class="jumbotron-strip-container">
              <img src="/images/hp.png"></img>
              <img src="/images/hp.png"></img>
              <img src="/images/hp.png"></img>
            </div>
            <div class="jumbotron-strip-container">
              <img src="/images/hp.png"></img>
              <img src="/images/hp.png"></img>
              <img src="/images/hp.png"></img>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbotron-element', JumbotronElement);
