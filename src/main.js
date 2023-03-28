import { searchCep } from './helpers/cepFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';

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
  } catch (erro) {
    apiError();
  }
  const removeLoadingDiv = document.querySelector('.loading');
  removeLoadingDiv.remove();
};

createList();
