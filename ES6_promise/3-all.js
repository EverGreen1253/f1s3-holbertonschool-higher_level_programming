import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  let output = '';

  photo
    .then((photoData) => {
      output += photoData.body + ' ';
      user
        .then((userData) => {
          output += userData.firstName + ' ' + userData.lastName;
        })
        .catch(() => {
          console.error('Signup system offline');
        })
        .finally(() => {
          console.log(output);
        });
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
