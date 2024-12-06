import {
  createProductListTemplate,
  createStoreListTemplate,
  createProductDetailTemplate,
  createTopProductTemplate,
  createTopStoreTemplate,
  createCategoryProductTemplate,
} from '../views/templates/template-creator';

function filterProducts(products, searchText) {
  const filtered = products.filter((r) =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filtered;
}

function displayProducts(products, productList) {
  const newRelease = products.slice(0, 10);
  if (products.length === 0) {
    productList.innerHTML =
      '<div class="product-not-found">Tidak ada produk.</div>';
  } else {
    const productItems = newRelease
      .map((product) => createProductListTemplate(product))
      .join('');
    productList.innerHTML = productItems;
  }
}

function displayStores(products, productList) {
  const newRelease = products.slice(0, 10);
  if (products.length === 0) {
    productList.innerHTML =
      '<div class="product-not-found">Tidak ada produk.</div>';
  } else {
    const productItems = newRelease
      .map((product) => createStoreListTemplate(product))
      .join('');
    productList.innerHTML = productItems;
  }
}

function displayCategoryProducts(productList) {
  const productItems = createCategoryProductTemplate();
  productList.innerHTML = productItems;
}

function displayTopProducts(products, productList) {
  if (products.length === 0) {
    productList.innerHTML =
      '<div class="product-not-found">Tidak ada produk.</div>';
  } else {
    const productItems = products
      .map((product) => createTopProductTemplate(product))
      .join('');
    productList.innerHTML = productItems;
  }
}

function displayTopStores(products, productList) {
  const topStores = products.slice(0, 5);
  if (products.length === 0) {
    productList.innerHTML =
      '<div class="product-not-found">Tidak ada produk.</div>';
  } else {
    const productItems = topStores
      .map((product) => createStoreListTemplate(product))
      .join('');
    productList.innerHTML = productItems;
  }
}

function displayDetailProducts(products, productList) {
  const productItems = createProductDetailTemplate(products);
  productList.innerHTML = productItems;
}

export {
  filterProducts,
  displayProducts,
  displayStores,
  displayCategoryProducts,
  displayTopProducts,
  displayTopStores,
  displayDetailProducts,
};
