import ProductDbSource from '../../data/productdb-source.js';
import {
  displayProducts,
  displayCategoryProducts,
  displayTopStores,
} from '../../utils/display-products';
import { createSkeletonProductListTemplate } from '../templates/template-creator';
import '../../component/JumbotronElement';
import '../../component/CategoryCard';

const Home = {
  async render() {
    return `
    <category-card></category-card>
    <div class="release-home">
      <h1 class="header-release">New Release</h1>
      <a href="#/product" class="view-all-products">view all</a> 
    </div>
    <div class="menu1">${createSkeletonProductListTemplate(20)}</div>
    <div class="release-home">
      <h1 class="header-release">Store Recommendation</h1>
      <a href="#/store" class="view-all-products">view all</a> 
    </div>
    <div class="menu2">${createSkeletonProductListTemplate(20)}</div>
    `;
  },

  async afterRender() {
    const products = await ProductDbSource.ProductList();
    const products2 = await ProductDbSource.ProductList();
    const products3 = await ProductDbSource.ProductList();

    const categoryList = document.querySelector('.menu');
    const productList = document.querySelector('.menu1');
    const productList2 = document.querySelector('.menu2');

    displayCategoryProducts(categoryList);
    displayProducts(products, productList);
    displayTopStores(products2, productList2);
  },
};

export default Home;
