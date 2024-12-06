class SearchBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="search-container">
              <input type="text" id="query" placeholder="Search by Name..." aria-label="Search Input">
          </div>   
        `;
  }
}
customElements.define('search-bar', SearchBar);
