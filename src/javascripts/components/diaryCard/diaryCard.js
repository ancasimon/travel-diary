const buildDiaryCard = (item) => {
  let domString = '';
  domString += `<div id="${item.id}" class="card mb-3">`;
  domString += '<div class="row no-gutters">';
  domString += '<div class="card-body">';
  domString += '<div class="d-flex flex-wrap">';
  domString += `<button id="btnDeleteDiaryEntry" class="btn ml-auto btn-lg" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>`;
  domString += '</div>';
  domString += `<h5 class="card-title">${item.locationName}</h5>`;
  domString += `<p class="card-text">${item.notes}</p>`;
  domString += `<p class="card-text"><small class="text-muted">${item.timestamp}</small></p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDiaryCard };
