class CategoryCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="header-category">Brand Category</h1>
    <div class="menu">
        <div class="category-item" tabindex="0">
            <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/image-category/iphone back.png"></img>
            <p class="product_item_detail">Handphone</p>
        </div>
        <div class="category-item" tabindex="0">
            <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/image-category/laptop.png"></img>
            <p class="product_item_detail">Laptop</p>
        </div>
        <div class="category-item" tabindex="0">
            <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/image-category/camera icon.png"></img>
            <p class="product_item_detail">Camera</p>
        </div>
    </div>
    
`;
  }
}

customElements.define('category-card', CategoryCard);
