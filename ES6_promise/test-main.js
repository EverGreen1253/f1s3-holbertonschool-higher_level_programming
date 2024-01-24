export async function returnOne() {
  console.log('1');
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
}

export async function returnTwo() {
  console.log('2');
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
}

export async function returnThree() {
  console.log('3');
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
}
