import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }));

  const photo = uploadPhoto(fileName)
    .catch((e) => ({
      status: 'rejected',
      value: e.message,
    }));

  return Promise.all([user, photo]);
}
