import ProductDbSource from '../../data/productdb-source.js';
import { displayStores, filterProducts } from '../../utils/display-products';
import { createSkeletonProductListTemplate } from '../templates/template-creator';
import '../../component/JumbotronElement';
import '../../component/CategoryCard';

const Store = {
  async render() {
    return `
    <div class="product-search-container">
        <h1 tabindex="0" class="search-header-product">Store List</h1>
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
      displayStores(filteredProducts, productList);
    };

    searchInput.addEventListener('input', filterAndUpdateUI);

    displayStores(products, productList);
  },
};

export default Store;
