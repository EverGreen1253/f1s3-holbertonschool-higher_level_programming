import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  let output = '';

  photo
    .then((photoData) => {
      output += photoData.body;
      return user;
    })
    .then((user) => {
      output += ` ${user.firstName} ${user.lastName}`;
      console.log(output);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
