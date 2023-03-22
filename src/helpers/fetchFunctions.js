export const fetchProduct = async (productId) => {

};

export const fetchProductsList = async (searchTerm) => {
  if (!searchTerm) {
    throw new Error('Termo de busca não informado');
  }
  const searchTermUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}`;
  const response = await fetch(searchTermUrl);
  const data = await response.json();
  return data;
};
