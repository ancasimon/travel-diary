// import diaryData from '../../helpers/data/diaryData';
import smashData from '../../helpers/data/smashData';
import utils from '../../helpers/utils';

const buildDiaryEntryModalEditForm = (diaryEntryCopyId) => {
  smashData.getSingleDiaryEntryWithLocationName(diaryEntryCopyId)
    .then((response) => {
      const diaryEntryCopy = response;
      console.error('respo data in build diary edit form', diaryEntryCopy);
      let domString = '';
      domString += `<form id="formEditDiaryEntry" data-id=${diaryEntryCopy.id}>`;
      console.error('diary id in edit form', diaryEntryCopy.id);
      domString += '<div class="form-group">';
      domString += '<label for="formDiaryLocationName">Location name</label>';
      domString += `<input type="text" class="form-control" id="formDiaryLocationName" placeholder="For ex, Baxter State Park, ME" readonly value="${diaryEntryCopy.locationName}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="formDiaryNotes">Your notes</label>';
      domString += `<textarea type="text" class="form-control" id="formDiaryNotes" placeholder="Your notes" value="${diaryEntryCopy.notes}">${diaryEntryCopy.notes}</textarea>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="formDiaryTimestamp">Date</label>';
      domString += `<input class="form-control" id="formDiaryTimestamp" rows="3" readonly value=${diaryEntryCopy.timestamp}></input>`;
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('modalEditDiaryEntryForm', domString);
    })
    .catch((error) => console.error('could not update diary entry notes', error));
};

export default { buildDiaryEntryModalEditForm };
