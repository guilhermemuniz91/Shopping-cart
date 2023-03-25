import { searchCep } from './helpers/cepFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productSection = document.getElementsByClassName('products');

const createList = () => {
  const productList = fetchProductList('computador');
  productList.forEach((product) => {
    productSection.appendChild(createProductElement(product));
  });
};

createList();
