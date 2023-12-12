import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }));

  const photo = await uploadPhoto(fileName)
    .catch((e) => ({
      status: 'rejected',
      value: e.message,
    }));

  return Promise.resolve([user, photo]);
}