import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const output = [];

  return user
    .then((value) => {
      output.push({
        status: 'fulfilled',
        value,
      });

      return photo;
    })
    .catch((e) => {
      output.push({
        status: 'rejected',
        value: e.message,
      });
    }).finally(() => {
      return output;
    });
}
