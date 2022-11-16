const stringToArray = (str) => {
  return str.split(",").map((el) => Number(el));
};

module.exports = stringToArray;
