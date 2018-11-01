import axios from 'axios';

const YELP_API_KEY = '<SPlOW5mPO6FHbiwobWsp5xnPlohewSzdV9LNLTZ6xOXhBix3tbexOCaoMb2pTpLlNa4127b6Kj1hfyHqM3iu0KK6fuLEad4mDsCUhfMTxEPyEr55UGkK75FpQ8KhW3Yx>';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer SPlOW5mPO6FHbiwobWsp5xnPlohewSzdV9LNLTZ6xOXhBix3tbexOCaoMb2pTpLlNa4127b6Kj1hfyHqM3iu0KK6fuLEad4mDsCUhfMTxEPyEr55UGkK75FpQ8KhW3Yx`
  }
});

const getCoffeeShops = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee,coffeeroasteries,coffeeshops',
        ...userLocation
      }
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          coords: business.coordinates
        };
      })
    )
    .catch(error => console.error(error));
};

export default {
  getCoffeeShops
};