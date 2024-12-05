class FavoriteProductShowPresenter {
  constructor({ view, favoriteProducts }) {
    this._view = view;
    this._favoriteProducts = favoriteProducts;

    this._showFavoriteProducts();
  }

  async _showFavoriteProducts() {
    const products = await this._favoriteProducts.getAllProduct();
    this._displayProducts(products);
  }

  _displayProducts(products) {
    this._view._showFavoriteProducts(products);
  }
}

export default FavoriteProductShowPresenter;
