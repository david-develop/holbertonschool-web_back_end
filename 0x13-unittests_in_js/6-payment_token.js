const getPaymentTokenFromAPI = (success) => {
  if (success) {
    const objData = { data: 'Successful response from the API' };
    return Promise.resolve(objData);
  }
}

module.exports = getPaymentTokenFromAPI;
