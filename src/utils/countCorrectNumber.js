const countCorrectNumber = (number1, number2) => {
  let count = 0;
  number1.forEach((v) => {
    if (number2.includes(v)) count++;
  });
  return count;
};

module.exports = countCorrectNumber;
