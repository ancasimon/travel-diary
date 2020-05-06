const buildDestinationCard = (destination) => {
  let domString = '';
  domString += '<div class="card">';
  domString += `<img src="${destination.image}" class="card-img-top" alt="${destination.alt}">`;
  domString += '<div class="card-body">';
  domString += `<h5 id-"destination-location" class="card-title">${destination.locationName}</h5>`;
  domString += `<p class="card-text">${destination.description}</p>`;
  domString += '<form id="diaryForm">';
  domString += '<div class="form-group">';
  domString += '<label for="diaryEntryNotesInput">Record it for posterity: What did you think about it?</label>';
  domString += '<textarea type="text" class="form-control notes diaryEntryNotesInput" id="diaryEntryNotesInput" rows="3"></textarea>';
  domString += '</div>';
  domString += '</form>';
  domString += `<button data-id=${destination.id} class="btn btn-primary submit-diary-entry-button">Submit</button>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDestinationCard };
