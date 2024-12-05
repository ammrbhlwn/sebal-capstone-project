import UrlParser from '../../routes/url-parser.js';
import ProductDbSource from '../../data/productdb-source.js';
import addReview from '../../utils/add-review-product.js';
import { displayDetailProducts } from '../../utils/display-products.js';
import { createSkeletonProductDetailTemplate } from '../templates/template-creator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteProductIdb from '../../data/favorite-product-idb.js';

const Detail = {
  async render() {
    return `
      <div id="detail-container" class="detail-container">${createSkeletonProductDetailTemplate()}</div>
    `;
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const productDetailList = await ProductDbSource.DetailProduct(url.id);
    const productDetailContainer = document.querySelector('#detail-container');

    displayDetailProducts(productDetailList, productDetailContainer);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteProducts: FavoriteProductIdb,
      product: {
        id: productDetailList.id,
        name: productDetailList.name,
        pictureId: productDetailList.pictureId,
        description: productDetailList.description,
        city: productDetailList.city,
        rating: productDetailList.rating,
      },
    });
  },
};

export default Detail;
