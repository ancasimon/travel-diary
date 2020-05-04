import moment from 'moment';

import diaryData from '../../helpers/data/diaryData';
import smashData from '../../helpers/data/smashData';

import diaryCard from '../diaryCard/diaryCard';

import utils from '../../helpers/utils';

const makeNewDiaryCard = (e) => {
  e.preventDefault();
  const destinationId = e.target.dataset.id;
  console.error('destination id where we clicked button', destinationId);
  const newDiaryEntry = {
    destinationId,
    notes: $('#diaryEntryNotesInput')[0].value,
    timestamp: moment().format('l'),
  };
  console.error('new object', newDiaryEntry);
  console.error('input value', ($('#diaryEntryNotesInput').val()));
  diaryData.addDiaryEntry(newDiaryEntry)
    .then(() => {
      document.getElementById('diaryForm').reset();
      // eslint-disable-next-line no-use-before-define
      buildDiaryContainer();
    })
    .catch((error) => console.error('could not add a new diary entry', error));
};

const buildDiaryContainer = () => {
  smashData.getDiaryEntriesWithLocationName()
    .then((diaryEntries) => {
      const sortedDiaryEntries = diaryEntries.sort((a, b) => a.timestamp - b.timestamp);
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

export default { buildDiaryContainer, makeNewDiaryCard };
