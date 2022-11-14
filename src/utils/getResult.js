const getBonus = (bonus, winning) => {
  return winning.includes(bonus);
};

const getNumber = (randomNumber, winning) => {
  const arr = randomNumber.filter((item) => winning.includes(item));
  return arr;
};

const getResult = (randomNumber, bonus, winning) => {
  const numberCnt = getNumber(randomNumber, winning).length;
  const isBonus = getBonus(bonus, winning);

  if (numberCnt === 6) return 5;
  if (numberCnt === 5 && isBonus === true) return 4;
  if (numberCnt === 5 && isBonus === false) return 3;
  if (numberCnt === 4) return 2;
  if (numberCnt === 3) return 1;
  return 0;
};

module.exports = getResult;
