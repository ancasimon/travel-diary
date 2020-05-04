import destinationCard from '../destinationCard/destinationCard';

import destinationData from '../../helpers/data/destinationData';

import utils from '../../helpers/utils';

const buildDestinationsContainer = () => {
  destinationData.getDestinations()
    .then((destinations) => {
      let domString = '';
      domString += '<div class="centeredSection">';
      domString += '<h2>Previous and Future Destinations</h2>';
      domString += '<div class="d-flex flex-wrap">';
      destinations.forEach((item) => {
        domString += '<div class="col-md-4">';
        domString += destinationCard.buildDestinationCard(item);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('destinationsDiv', domString);
    })
    .catch((error) => console.error('get destinations broke', error));
};

export default { buildDestinationsContainer };
