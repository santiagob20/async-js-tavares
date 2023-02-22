// const promise = new Promise((reject, resolve) => {
//   resolve('hey!!!');
// });

const cows = 9;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve("Tenemos suficientes vacas para ordeñar");
  } else reject("No hay vacas suficientes para la leche");
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
