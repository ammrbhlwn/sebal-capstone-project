import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';
import Product from '../views/pages/product.js';
import Store from '../views/pages/store.js';
import About from '../views/pages/about.js';

const routes = {
  '/': Home,
  '/home': Home,
  '/product': Product,
  '/store': Store,
  '/about': About,
  '/detail/:id': Detail,
};

export default routes;
