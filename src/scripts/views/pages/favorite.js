import FavoriteProductIdb from '../../data/favorite-product-idb';
import FavoriteProductSearchPresenter from './liked-products/favorite-product-search-presenter';
import FavoriteProductShowPresenter from './liked-products/favorite-product-show-presenter';
import FavoriteProductSearchView from './liked-products/favorite-product-search-view';

const view = new FavoriteProductSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';
    const products = await FavoriteProductIdb.getAllProduct();

    if (!products) {
      console.log(products);
    } else {
      new FavoriteProductShowPresenter({
        view,
        favoriteProducts: FavoriteProductIdb,
      });
      new FavoriteProductSearchPresenter({
        view,
        favoriteProducts: FavoriteProductIdb,
      });
    }
  },
};

export default Favorite;
