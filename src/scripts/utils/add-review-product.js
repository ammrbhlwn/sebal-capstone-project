import ProductDbSource from '../data/productdb-source.js';
import ReviewElement from '../component/ReviewElement.js';

const addReview = async ({ url, name, review }) => {
  const data = { id: url, name, review };
  const reviewContainer = document.querySelector('.review-container');

  const customerReviews = await ProductDbSource.addReviewProduct(data);
  reviewContainer.innerHTML = customerReviews
    .map((element) => ReviewElement(element))
    .join('');
};

export default addReview;
