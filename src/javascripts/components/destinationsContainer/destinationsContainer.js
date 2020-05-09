import firebase from 'firebase/app';
import destinationCard from '../destinationCard/destinationCard';

import destinationData from '../../helpers/data/destinationData';

import utils from '../../helpers/utils';
import smashData from '../../helpers/data/smashData';

const makeNewDestination = (e) => {
  console.error('button clicked');
  e.preventDefault();
  const newDestination = {
    locationName: $('#formAddLocationName').val(),
    image: $('#formAddLocationImageUrl').val(),
    alt: $('#formAddLocationName').val(),
    description: $('#formAddLocationDescription').val(),
    uid: firebase.auth().currentUser.uid,
  };
  console.error('new object', newDestination);
  destinationData.addDestination(newDestination)
    .then(() => {
      $('#formAddDestination input').val('');
      $('#modalAddDestination').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildDestinationsContainer();
    })
    .catch((error) => console.error('could not add a new destination', error));
};

const buildDestinationsContainer = () => {
  smashData.getDestinationsWithDiaryEntries()
    .then((destinations) => {
      let domString = '';
      domString += '<div class="centeredSection">';
      domString += '<div class="d-flex flex-wrap">';
      domString += '<h2 class="mr-auto">Previous and Future Destinations</h2>';
      domString += '<button type="button" class="btn btn-lg ml-auto iconLarge" data-toggle="modal" data-target="#modalAddDestination"><i class="fas fa-plus-square"></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      destinations.forEach((item) => {
        domString += '<div class="col-md-4">';
        console.error('dest in foreach loop', item);
        domString += destinationCard.buildDestinationCard(item);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '<p class="legend">*Legend: Dark background means I made it! Light background means it\'s still on my wishlist...</p>';
      domString += '</div>';
      utils.printToDom('destinationsDiv', domString);
    })
    .catch((error) => console.error('get destinations broke', error));
};

const buildDestinationsContainerEvents = () => {
  $('body').on('click', '#btnSaveNewDestination', makeNewDestination);
};

export default { buildDestinationsContainer, buildDestinationsContainerEvents };
