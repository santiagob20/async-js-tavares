function sum(num1, num2) {
  return num1 + num2;
}

// Declare a callback function. It's a way to send a funciton through another function to be used.
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(1, 2, sum));

setTimeout(() => {
  console.log("Hola JS");
}, 2000);


function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Oscar');