import ProductDbSource from '../../data/productdb-source.js';
import { displayProducts, filterProducts } from '../../utils/display-products';
import { createSkeletonProductListTemplate } from '../templates/template-creator';
import '../../component/JumbotronElement';
import '../../component/CategoryCard';

const Product = {
  async render() {
    return `
    <div class="product-search-container">
        <h1 tabindex="0" class="search-header-product">Product List</h1>
        <search-bar></search-bar>
    </div>
    <div class="menu1">${createSkeletonProductListTemplate(20)}</div>
    `;
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';
    const searchInput = document.querySelector('#query');

    const products = await ProductDbSource.ProductList();
    const productList = document.querySelector('.menu1');

    const filterAndUpdateUI = () => {
      const filteredProducts = filterProducts(products, searchInput.value);
      displayProducts(filteredProducts, productList);
    };

    searchInput.addEventListener('input', filterAndUpdateUI);

    displayProducts(products, productList);
  },
};

export default Product;
