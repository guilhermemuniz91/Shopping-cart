export const getAddress = async (cep) => {
  const firstAPI = `https://cep.awesomeapi.com.br/json/${cep}`;
  const secondAPI = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const response1 = await fetch(firstAPI);
  const response2 = await fetch(secondAPI);
  const data1 = await response1.json();
  const data2 = await response2.json();
  const promises = [data1, data2];
  const wcf = Promise.any(promises); // wcf stands for whatComesFirst
  return wcf;
};

export const searchCep = async (cep) => {
  // const cepInput = document.getElementsByClassName('cep-input');
  const spanAddress = document.getElementsByClassName('cart__address');
  try {
    const clientAddress = await getAddress(cep);
    spanAddress.innerText = `${wcf.address || wcf.street} - ${wcf.neighborhood
    || wcf.district} - ${wcf.city} - ${wcf.state}`;
  } catch (Error) {
    spanAddress.innerText = 'CEP não encontrado';
  }
};
