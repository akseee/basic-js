const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/(\w)\1*/g, (match, p1) => {
    return match.length > 1 ? match.length + p1 : p1;
  });
}

module.exports = {
  encodeLine,
};
