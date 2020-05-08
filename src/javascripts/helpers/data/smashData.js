import destinationData from './destinationData';
import diaryData from './diaryData';

const getDiaryEntriesWithLocationName = () => new Promise((resolve, reject) => {
  diaryData.getDiaryEntries()
    .then((diaryResponse) => {
      destinationData.getDestinations().then((destinationResponse) => {
        // NOTE: First we get the array we have with the diary entries and then the array we have with the destinations.
        const finalDiaryEntries = [];
        diaryResponse.forEach((diaryEntry) => {
          // NOTE: Then we go over each object in the array of diary entries and create a copy of each object. - this is so we do not actually modify the Firebase database but rather just use it get the data we need to display in a temporary object.
          const diaryEntryCopy = { ...diaryEntry };
          // NOTE: Next we find the destination in the array of destinations we got back that has the same id as the destinationId in the diaryEntry objects.
          const selectedDestination = destinationResponse.find((x) => x.id === diaryEntryCopy.destinationId);
          // NOTE: Then we copy the location name from any destinations whose ids are on a diary entry into that copy of that diary entry.
          diaryEntryCopy.locationName = selectedDestination.locationName;
          // NOTE: Lastly we push that copy of the diary entry into a final array and then resolve the array.
          // Now we also want to update the timestamp so we cna sort by it!
          const dateString = diaryEntry.timestamp.split('/').reverse().toString();
          const dateTimestamp = Date.parse(dateString);
          diaryEntryCopy.dateTimestamp = dateTimestamp;
          finalDiaryEntries.push(diaryEntryCopy);

          resolve(finalDiaryEntries);
        });
      });
    })
    .catch((error) => reject(error));
});

const getSingleDiaryEntryWithLocationName = (diaryEntryId) => new Promise((resolve, reject) => {
  diaryData.getSingleDiaryEntry(diaryEntryId)
    .then((diaryResponse) => {
      destinationData.getDestinations().then((destinationResponse) => {
        console.error('diaryResp', diaryResponse);
        const diaryEntryCopy = { ...diaryResponse.data };
        diaryEntryCopy.id = diaryEntryId;
        console.error('dest resp', destinationResponse);
        const selectedDestination = destinationResponse.find((x) => x.id === diaryEntryCopy.destinationId);
        console.error('dest Id in responses', selectedDestination);
        diaryEntryCopy.locationName = selectedDestination.locationName;
        resolve(diaryEntryCopy);
        console.error('diary copy', diaryEntryCopy);
      });
    })
    .catch((error) => reject(error));
});

const getDestinationsWithDiaryEntries = () => new Promise((resolve, reject) => {
  destinationData.getDestinations()
    .then((destinationResponse) => {
      diaryData.getDiaryEntries().then((diaryResponse) => {
        console.error('dest respo', destinationResponse);
        console.error('diary respo', diaryResponse);
        const finalDestinations = [];
        diaryResponse.forEach((diary) => {
          const selectedDestination = destinationResponse.find((x) => x.id === diary.destinationId);
          finalDestinations.push(selectedDestination);
          resolve(finalDestinations);
          console.error('final dest', finalDestinations);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getDiaryEntriesWithLocationName, getSingleDiaryEntryWithLocationName, getDestinationsWithDiaryEntries };
