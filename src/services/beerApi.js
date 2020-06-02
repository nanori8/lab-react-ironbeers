import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export { listAllBeers };

// const listAllBeers = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('https://ih-beers-api2.herokuapp.com/beers')
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });
// };
