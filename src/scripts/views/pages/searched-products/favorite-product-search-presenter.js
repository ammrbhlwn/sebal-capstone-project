class FavoriteProductSearchPresenter {
  constructor({ favoriteProducts, view }) {
    this._favoriteProducts = favoriteProducts;
    this._view = view;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchProducts(latestQuery);
    });
  }

  async _searchProducts(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundProducts;
    if (this.latestQuery.length > 0) {
      foundProducts = await this._favoriteProducts.searchProducts(
        this.latestQuery
      );
    } else {
      foundProducts = await this._favoriteProducts.getAllProduct();
    }

    this._showFoundProducts(foundProducts);
  }

  _showFoundProducts(product) {
    this._view.showFavoriteProducts(product);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteProductSearchPresenter;
