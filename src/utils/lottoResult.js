const { PRIZE_MONEY, MATCHING_NUMBERS_COUNT } = require('./constant');

lottoResult = {};

lottoResult.getAllMatchingNumbersResult = (userAllLottoNumbers, winningNumbers, bonusNumber) => {
  const matchingNumbersResult = [];

  userAllLottoNumbers.forEach((userLottoNumbers) => {
    matchingNumbersResult.push(
      lottoResult.getMatchingNumbersResult(userLottoNumbers, winningNumbers, bonusNumber),
    );
  });
  return matchingNumbersResult;
};

lottoResult.getMatchingNumbersResult = (userLottoNumbers, winningNumbers, bonusNumber) => {
  let winningNumbersResult = 0;
  let bonusNumberResult = 0;

  userLottoNumbers.forEach((userLottoNumber) => {
    if (winningNumbers.includes(userLottoNumber)) {
      winningNumbersResult += 1;
      return;
    }
    if (bonusNumber === userLottoNumber) {
      bonusNumberResult += 1;
    }
  });

  return [winningNumbersResult, bonusNumberResult];
};

lottoResult.getLank = (matchingNumbersResult) => {
  const rank = Array.from({ length: 5 }, () => 0);

  matchingNumbersResult.forEach(([winningCount, bonusCount]) => {
    if (winningCount === MATCHING_NUMBERS_COUNT.FIRST_PLACE) {
      rank[0] += 1;
      return;
    }
    if (
      winningCount === MATCHING_NUMBERS_COUNT.SECOND_PLACE &&
      bonusCount === MATCHING_NUMBERS_COUNT.SECOND_PLACE_BONUS
    ) {
      rank[1] += 1;
      return;
    }
    if (winningCount === MATCHING_NUMBERS_COUNT.THIRD_PLACE) {
      rank[2] += 1;
      return;
    }
    if (winningCount === MATCHING_NUMBERS_COUNT.FOURTH_PLACE) {
      rank[3] += 1;
      return;
    }
    if (winningCount === MATCHING_NUMBERS_COUNT.FIFTH_PLACE) {
      rank[4] += 1;
    }
  });
  return rank;
};

lottoResult.getProfit = ([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) => {
  const profit = [
    firstPlace * PRIZE_MONEY.FIRST_PLACE,
    secondPlace * PRIZE_MONEY.SECOND_PLACE,
    thirdPlace * PRIZE_MONEY.THIRD_PLACE,
    fourthPlace * PRIZE_MONEY.FOURTH_PLACE,
    fifthPlace * PRIZE_MONEY.FIFTH_PLACE,
  ];
  return profit.reduce((sum, currentValue) => sum + currentValue, 0);
};

module.exports = lottoResult;
