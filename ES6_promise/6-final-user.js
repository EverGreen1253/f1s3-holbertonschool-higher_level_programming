import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  let output = [];

  return user
    .then((value) => {
      output[0] = {
        status: 'fulfilled',
        value,
      };

      return photo;
    })
    .catch((e) => {
      output[1] = {
        status: 'rejected',
        value: e.message,
      };

      return output;
    });
}
