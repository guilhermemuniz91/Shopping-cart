import { searchCep } from './helpers/cepFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';

const cartList = document.querySelector('.cart__products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productSection = document.querySelector('.products');

const apiError = () => {
  const errorText = document.createElement('div');
  errorText.className = 'error';
  errorText.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  productSection.appendChild(errorText);
};

const createList = async () => {
  try {
    const addLoadingDiv = document.createElement('div');
    addLoadingDiv.className = 'loading';
    addLoadingDiv.innerText = 'carregando...';
    productSection.appendChild(addLoadingDiv);
    const productList = await fetchProductsList('computador');
    productList.forEach((product) => {
      productSection.appendChild(createProductElement(product));
    });
  } catch (error) {
    apiError();
  }
  const removeLoadingDiv = document.querySelector('.loading');
  removeLoadingDiv.remove();
};

createList();

const sumCartPrice = (price) => {
  let cartTotal = 0;
  cartTotal += price;
  const cartTotalPrice = document.querySelector('.total-price');
  cartTotalPrice.innerText = cartTotal.toFixed(2);
};
export default addProductToCart = async (productId) => {
  const selectedProduct = await fetchProduct(productId);
  const product = createCartProductElement(selectedProduct);
  cartList.appendChild(product);
  sumCartPrice(selectedProduct.price);
};
