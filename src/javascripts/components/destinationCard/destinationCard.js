const buildDestinationCard = (destination) => {
  let domString = '';
  if (destination.visited === true) {
    domString += '<div class="card destinationCard visitedDestination">';
  } else {
    domString += '<div class="card destinationCard unvisitedDestination">';
  }
  domString += '    <div class="flip-card fullWidth">';
  domString += '      <div class="flip-card-inner">';
  domString += '        <div class="flip-card-front">';
  domString += '          <div class="parkCard">';
  domString += `            <img src="${destination.image}" class="card-img-top" alt="${destination.alt}">`;
  domString += `            <h5 id-"destination-location" class="card-title parkName">${destination.locationName}</h5>`;
  domString += '          </div>';
  domString += '        </div>';
  domString += '        <div class="flip-card-back">';
  domString += `          <p class="card-text"><small>${destination.description}</small></p>`;
  domString += '        </div>';
  domString += '      </div>';
  domString += '    </div>';
  domString += '    <div>';
  domString += '      <form id="diaryForm" class="parkForm">';
  domString += '        <div class="form-group" id="textInputFormGroup">';
  domString += '          <label for="diaryEntryNotesInput" class="question">Record it for posterity: What did you think about it?</label>';
  domString += '          <textarea class="form-control notes diaryEntryNotesInput" rows="3"></textarea>';
  domString += '        </div>';
  domString += '      </form>';
  domString += `      <button id="submit-diary-entry-button" data-id="${destination.id}" class="btn btn-light submit-diary-entry-button">Submit</button>`;
  domString += '    </div>';
  domString += '  </div>';

  return domString;
};

export default { buildDestinationCard };
