export const fetchProduct = async (productId) => {
  if (!productId) {
    throw new Error('ID não informado');
  }
  const productUrl = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(productUrl);
  const data = await response.json();
  return data;
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
