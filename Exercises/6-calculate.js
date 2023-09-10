'use strict';

const square = (a) => a * a;

const cube = (x) => x ** 3;



const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const resultArr = [];
  for (let i = 0; i <= 9; i++) {
    resultArr.push(average(square(i), cube(i)));
  }
  return resultArr;
};

module.exports = { square, cube, average, calculate };
