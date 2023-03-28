export const getAddress = async (cep) => {
  const firstAPI = `https://cep.awesomeapi.com.br/json/${cep}`;
  const secondAPI = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const promises = await Promise.any([fetch(firstAPI), fetch(secondAPI)]);
  const response = await promises.json();
  return response;
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input').value;
  const spanAddress = document.querySelector('.cart__address');
  try {
    const clientAddress = await getAddress(cepInput);
    const { street, address, neighborhood, district, city, state } = clientAddress;
    spanAddress.innerText = `${address || street} - ${neighborhood
      || district} - ${city} - ${state}`;
  } catch (Error) {
    spanAddress.innerText = 'CEP não encontrado';
  }
};
