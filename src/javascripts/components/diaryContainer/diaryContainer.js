import firebase from 'firebase/app';
import diaryData from '../../helpers/data/diaryData';
import smashData from '../../helpers/data/smashData';

import diaryCard from '../diaryCard/diaryCard';

import utils from '../../helpers/utils';
import diaryEntryModalEdit from './diaryEntryModalEdit';
import destinationsContainer from '../destinationsContainer/destinationsContainer';

const makeNewDiaryCard = (e) => {
  e.preventDefault();
  const destinationId = e.target.dataset.id;
  const notes = e.target.previousSibling.previousSibling.firstChild.nextSibling.lastElementChild.value;
  const newDiaryEntry = {
    destinationId,
    notes,
    timestamp: new Date().toLocaleDateString('en-GB'),
    uid: firebase.auth().currentUser.uid,
  };
  diaryData.addDiaryEntry(newDiaryEntry)
    .then(() => {
      destinationsContainer.buildDestinationsContainer();
      // eslint-disable-next-line no-use-before-define
      buildDiaryContainer();
    })
    .catch((error) => console.error('could not add a new diary entry', error));
};

const removeDiaryEntry = (e) => {
  const diaryEntryId = e.target.closest('button').dataset.id;
  diaryData.deleteDiaryEntry(diaryEntryId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildDiaryContainer();
    })
    .catch((error) => console.error('could not delete diary entry', error));
};

const editDiaryEntryEvent = (e) => {
  e.preventDefault();
  const diaryEntryId = e.target.closest('button').dataset.id;
  $('#modalEditDiaryEntry').modal('show');
  diaryEntryModalEdit.buildDiaryEntryModalEditForm(diaryEntryId);
};

const updateDiaryEntry = (e) => {
  e.preventDefault();
  const diaryEntryId = $('#formEditDiaryEntry').data('id');
  const editedNotes = $('#formDiaryNotes').val();
  diaryData.updateDiaryEntry(diaryEntryId, editedNotes)
    .then(() => {
      $('#modalEditDiaryEntry').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildDiaryContainer();
    })
    .catch((error) => console.error('could not update diary entry', error));
};

const buildDiaryContainer = () => {
  smashData.getDiaryEntriesWithLocationName()
    .then((diaryEntries) => {
      const sortedDiaryEntries = diaryEntries.sort((a, b) => a.dateTimestamp - b.dateTimestamp);
      let domString = '';
      domString += '<div class="centeredSection">';
      domString += '<h2>Diary</h2>';
      sortedDiaryEntries.forEach((item) => {
        domString += '<div class="diaryCard">';
        domString += diaryCard.buildDiaryCard(item);
        domString += '</div>';
      });
      domString += '</div>';
      utils.printToDom('diaryDiv', domString);
    })
    .catch((error) => console.error('get diary entries broke', error));
};

const buildDiaryContainerEvents = () => {
  $('body').on('click', '.submit-diary-entry-button', makeNewDiaryCard);
  $('body').on('click', '#btnDeleteDiaryEntry', removeDiaryEntry);
  $('body').on('click', '#btnEditDiaryEntry', editDiaryEntryEvent);
  $('body').on('click', '#btnSaveEditedDiaryEntry', updateDiaryEntry);
};

export default { buildDiaryContainer, makeNewDiaryCard, buildDiaryContainerEvents };
