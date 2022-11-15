const calcBonus = (bonus, randomNumber) => {
  return randomNumber.includes(bonus);
};

const calcMatch = (randomNumber, lottoNumbers) => {
  const arr = randomNumber.filter((item) => lottoNumbers.includes(item));
  return arr;
};

const calcRank = (matchCount, isBonus) => {
  if (matchCount === 6) return 5;
  if (matchCount === 5 && isBonus === true) return 4;
  if (matchCount === 5 && isBonus === false) return 3;
  if (matchCount === 4) return 2;
  if (matchCount === 3) return 1;
  return 0;
};

const calcResult = (randomNumbers, lottoNumbers, bonus) => {
  const resultArr = [0, 0, 0, 0, 0, 0];
  randomNumbers.map((randomNumber) => {
    const matchCount = calcMatch(randomNumber, lottoNumbers).length;
    const isBonus = calcBonus(bonus, randomNumber);
    resultArr[calcRank(matchCount, isBonus)] += 1;
  });

  return resultArr;
};

module.exports = calcResult;
