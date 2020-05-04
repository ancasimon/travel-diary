import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDiaryEntries = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/diaryEntries.json`)
    .then((response) => {
      const allDiaryEntries = response.data;
      const diaryEntries = [];
      if (diaryEntries) {
        Object.keys(allDiaryEntries).forEach((diaryEntryId) => {
          allDiaryEntries[diaryEntryId].id = diaryEntryId;
          diaryEntries.push(allDiaryEntries[diaryEntryId]);
        });
      }
      resolve(diaryEntries);
    })
    .catch((error) => reject(error));
});

export default { getDiaryEntries };
