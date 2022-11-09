function isPositiveInteger(input) {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

function printError(message) {
  throw Error(`[ERROR] ${message}`);
}

module.exports = {
  isPositiveInteger,
  printError,
};
