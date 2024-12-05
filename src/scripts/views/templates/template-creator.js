import CONFIG from '../../globals/config.js';

const medium = 'medium/';
const small = 'small/';

const createSkeletonProductListTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="product-item">
          <picture>
            <img class="product_item_picture lazyload" data-src="/images/placeholder.png" alt="skeleton">
          </picture>
          
          <div class="text-container">
            <h2 class="skeleton">Lorem ipsum</h2>
            <div class="city-rating">
              <p class="skeleton">Lorem ipsum</p>
              <p class="skeleton">Lorem ipsum</p>
            </div>
            <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
          </div>
        </div>
    `;
  }
  return template;
};

const createSkeletonProductDetailTemplate = () => {
  let template = '';

  template += `
      <div class="product_detail_picture">
        <picture>
          <img class="product_detail_picture lazyload" data-src="/images/placeholder.png" alt="skeleton">
        </picture>
      </div>
      <div class="text-container">
        <div class="city-rating">
          <h2 class="skeleton>Lorem Ipsum</h2>
        </div>
        <p class="skeleton">Lorem Ipsum</p>
        <hr>
        <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
      </div>
    `;
  return template;
};

const createProductListTemplate = (product) => `
    <div id="${product.id}" class="product-item" tabindex="0">
      <picture class="lazyload container-img">
        
        <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/hp.png"></img>
      </picture>
      
      <div class="text-container">
        <h2 class="product_item_name">Phone</h2>
        <p class="product_item_city">Iphone 16 Pro Max 16GB</p>
        <p class="product_item_detail">IDR 7,999,999</p>
      </div>
      <button class="product_item_detail-button" onclick="location.href='/#/detail/${product.id}'" aria-label="Lihat product">View Product</button>
    </div>
`;

const createCategoryProductTemplate = () => `
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
`;

const createTopStoreTemplate = (product) => `
    <div id="${product.id}" class="product-item" tabindex="0">
      <picture class="lazyload container-img">
        
        <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/hp.png"></img>
      </picture>
      
      <div class="text-container">
        <h2 class="product_item_name">Phone</h2>
        <div class="city-rating">
          <p class="product_item_city">Iphone 16 Pro Max 16GB</p>
        </div>
        <p class="product_item_detail">IDR 7,999,999</p>
      </div>
      <button class="product_item_detail-button" onclick="location.href='/#/detail/${product.id}'" aria-label="Lihat product">View Product</button>
    </div>
`;

const createTopProductTemplate = (product) => `
    <div id="${product.id}" class="product-item" tabindex="0">
      <picture class="lazyload container-img">
        
        <img class="product_item_picture lazyload" src="/images/placeholder.png" data-src="/images/hp.png"></img>
      </picture>
      
      <div class="text-container">
        <h2 class="product_item_name">Phone</h2>
        <div class="city-rating">
          <p class="product_item_city">Iphone 16 Pro Max 16GB</p>
        </div>
        <p class="product_item_detail">IDR 7,999,999</p>
      </div>
      <button class="product_item_detail-button" onclick="location.href='/#/detail/${product.id}'" aria-label="Lihat productran">View Product</button>
    </div>
`;

const createProductDetailTemplate = (product) => `
      <div class="cta-back">
        <button class"back" onClick="location.href=''"><</button>
        <p>Back to home</p>
      </div>
      <div class="detail-content">
        <div class="product_detail_picture" tabindex="0">
          <picture class="lazyload">
            <source class="lazyload" media="(max-width: 600px)" srcset="${
              CONFIG.BASE_IMAGE_URL + small + product.pictureId
            }">
            <img class="product_detail_picture lazyload" src="/images/placeholder.png" data-src="${
              CONFIG.BASE_IMAGE_URL + medium + product.pictureId
            }" alt="product ${product.name || '-'}">
          </picture>
        </div>
        <div class="text-container" tabindex="0">
          <div class="city-rating">
            <div class="product_detail_category">Phone</div>
            <div class="liked-rating">
              <div id="likeButtonContainer" class="like-button"></div>
              <p class="product_detail_rating">⭐️${product.rating || '-'}</p>
            </div>
          </div>
          <h2 class="product_detail_name">Iphone 16 Pro Max 64GB</h2>
          <p class="product_detail_description">${
            product.description || '-'
          }</p>
          <div class="cta-checkout">
            <p class="price">IDR 7,999,999</p> 
            <button class="checkout" onClick="location.href=''">🛒 Checkout</button>
          </div>
        </div>
      </div>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this product" id="likeButton" class="like-button">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this product" id="likeButton" class="liked-button">
  </button>
`;

export {
  createSkeletonProductListTemplate,
  createCategoryProductTemplate,
  createSkeletonProductDetailTemplate,
  createTopProductTemplate,
  createTopStoreTemplate,
  createProductListTemplate,
  createProductDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
