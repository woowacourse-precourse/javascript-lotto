const getSummary = (arr) => {
  const winList = new Array(5).fill(0);
  arr.forEach((value) => {
    if (value >= 3 && value <= 6) {
      winList[value - 3] += 1;
    }
    if (value > 6) {
      winList[4] += 1;
    }
  });

  return winList;
};

module.exports = getSummary;
