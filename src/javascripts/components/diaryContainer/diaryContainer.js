// import diaryData from '../../helpers/data/diaryData';
import smashData from '../../helpers/data/smashData';

import diaryCard from '../diaryCard/diaryCard';

import utils from '../../helpers/utils';


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

export default { buildDiaryContainer };
