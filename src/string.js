const convertNumberToComma = (number) => number.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

module.exports = { convertNumberToComma };
