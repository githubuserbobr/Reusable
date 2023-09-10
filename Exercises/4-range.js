'use strict';

const range = (start, end) => {
  const result = [];
  for (let i = 0; start <= end; i++) {
    result.push(start++);
  }
  return result;
};

module.exports = { range };
