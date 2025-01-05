const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const value = String(n);
  let maxNum = -Infinity;
  for (let i = 0; i < value.length; i++) {
    const number = Number(value.slice(0, i) + value.slice(i + 1));
    if (Number(number) > maxNum) {
      maxNum = Number(number);
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
