import { createProductListTemplate } from '../../templates/template-creator.js';

class FavoriteProductSearchView {
  getTemplate() {
    return `
        <div class="favorite-container">
            <h1 tabindex="0" class="favorite-header">Favorite Products</h1>
            <div class="search-container">
                <input type="text" id="query" placeholder="Search by Name..." aria-label="Search Input">
            </div>   
        </div>
        <div class="favorite" id="products"></div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteProduct(products) {
    let html;
    const bottomElement = document.querySelector('.bottom');

    if (products.length) {
      if (bottomElement) {
        bottomElement.style.display = 'block';
      }

      html = products.reduce(
        (carry, product) => carry.concat(createProductListTemplate(product)),
        ''
      );
    } else {
      if (bottomElement) {
        bottomElement.style.display = 'none';
      }
      html = this._getEmptyProductTemplate();
    }

    document.getElementById('products').innerHTML = html;

    document
      .getElementById('products')
      .dispatchEvent(new Event('products:updated'));
  }

  _getEmptyProductTemplate() {
    return `
        <div class="product-not-found">Tidak ada produk.</div> `;
  }
}

export default FavoriteProductSearchView;
