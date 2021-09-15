import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promiseUser = {
    status: 'pending',
  };
  const promisePhoto = {
    status: 'pending',
  };

  const res = await signUpUser(firstName, lastName)
    .catch((e) => {
      promiseUser.value = e.toString();
    });
  if (!res) {
    promiseUser.status = 'rejected';
  } else {
    promiseUser.status = 'fulfilled';
    promiseUser.value = res;
  }

  const resP = await uploadPhoto(fileName)
    .catch((e) => {
      promisePhoto.value = e.toString();
    });
  if (!resP) {
    promisePhoto.status = 'rejected';
  } else {
    promisePhoto.status = 'fulfilled';
    promisePhoto.value = resP;
  }

  return [promiseUser, promisePhoto];
}
