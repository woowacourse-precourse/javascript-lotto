const formatWithComma = (number) => {
  const commaRegex = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
  return `${number}`.replace(commaRegex, ',');
};

const formatTwoDecimal = (number) => {
  return Math.round(number * 10) / 10;
};

module.exports = { formatWithComma, formatTwoDecimal };
