import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDestinations = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/destinations.json`)
    .then((response) => {
      const allDestinations = response.data;
      const destinations = [];
      if (destinations) {
        Object.keys(allDestinations).forEach((destinationId) => {
          allDestinations[destinationId].id = destinationId;
          destinations.push(allDestinations[destinationId]);
        });
      }
      resolve(destinations);
    })
    .catch((error) => reject(error));
});

const addDestination = (newDestination) => axios.post(`${baseUrl}/destinations.json`, newDestination);

export default { getDestinations, addDestination };
