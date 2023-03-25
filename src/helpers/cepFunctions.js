export const getAddress = (cep) => {
  const firstAPI = `https://cep.awesomeapi.com.br/json/${cep}`;
  const secondAPI = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const response1 = fetch(firstAPI);
  const response2 = fetch(secondAPI);
  const data1 = response1.json();
  const data2 = response2.json();
  const promises = [data1, data2];
  const whatComesFirst = promise.any(promises);
return whatComesFirst;
};


export const searchCep = () => {
  // seu código aqui
};
