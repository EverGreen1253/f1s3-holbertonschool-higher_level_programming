import { returnOne, returnTwo, returnThree } from './test-main';

returnThree()
  .then(() => {
    return returnTwo();
  })
  .then(() => {
    return returnOne();
  });
