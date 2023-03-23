import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });

  it('executa função e testa se fetch é chamada', () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('executa função e testa se o retorno utiliza o endpoint correto', async () => {
    fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });

  it('fetchProduct retorna as informações do produto da API', async () => {
    await expect(fetchProduct('MLB1405519561')).resolves.toEqual(product);
  });

  it('fetchProducts retorna um erro quanto não é passado nenhum parametro', async () => {
    await expect(fetchProduct).rejects.toThrow('ID não informado');
  });


});
