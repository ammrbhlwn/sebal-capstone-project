import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator.js';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteProduct, product }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteProduct = favoriteProduct;
    this._product = product;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._product;

    if (await this._isproductExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isproductExist(id) {
    const product = await this._favoriteProduct.getProduct(id);
    return !!product;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteProduct.putProduct(this._product);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteProduct.deleteProduct(this._product.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
