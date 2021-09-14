export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      const respObj = {
        status: 200,
        body: 'Success',
      };
      resolve(respObj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });

  return myPromise;
}
