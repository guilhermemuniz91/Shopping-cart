import { searchCep } from './helpers/cepFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productSection = document.getElementsByClassName('products');

const createList = async () => {
  const productList = await fetchProductsList('computador');
  productList.forEach((product) => {
    productSection.appendChild(createProductElement(product));
  });
};

createList();
