const buildDestinationCard = (destination) => {
  let domString = '';
  domString += '<div class="card">';
  domString += `<img src="${destination.image}" class="card-img-top" alt="${destination.alt}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${destination.locationName}</h5>`;
  domString += `<p class="card-text">${destination.description}</p>`;
  domString += '<div class="form-group">';
  domString += '<label for="diaryEntryNotesInput">Record it for posterity: What did you think about it?</label>';
  domString += '<textarea class="form-control" id="diaryEntryNotesInput" rows="3"></textarea>';
  domString += '</div>';
  domString += '<button id="submit-diary-entry-button" class="btn btn-primary">Submit</button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDestinationCard };
