import utils from '../../helpers/utils';

const buildDestinationModalAddForm = () => {
  let domString = '';
  domString += '<form id="formAddDestination">';
  domString += '<div class="form-group">';
  domString += '<label for="formAddLocationName">Location name</label>';
  domString += '<input type="text" class="form-control" id="formAddLocationName" placeholder="For ex, Baxter State Park, ME">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="formAddLocationImageUrl">Link to a photo</label>';
  domString += '<input type="text" class="form-control" id="formAddLocationImageUrl" placeholder="Find a pic!">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="formAddLocationDescription">Why do you want to go there?</label>';
  domString += '<textarea class="form-control" id="formAddLocationDescription" rows="3"></textarea>';
  domString += '</div>';
  domString += '</form>';

  utils.printToDom('modalAddDestinationForm', domString);
};

export default { buildDestinationModalAddForm };
