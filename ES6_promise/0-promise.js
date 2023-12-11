export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('foo');
    }, 300);
  });

  return myPromise;
}
