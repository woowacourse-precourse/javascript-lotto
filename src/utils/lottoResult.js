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
    } else if (bonusNumber === userLottoNumber) {
      bonusNumberResult += 1;
    }
  });

  return [winningNumbersResult, bonusNumberResult];
};

lottoResult.getLank = (matchingNumbersResult) => {
  const rank = Array.from({ length: 5 }, () => 0);

  matchingNumbersResult.forEach(([winningCount, bonusCount]) => {
    if (winningCount === 6) {
      rank[0] += 1;
      return;
    }
    if (winningCount === 5 && bonusCount === 1) {
      rank[1] += 1;
      return;
    }
    if (winningCount === 5) {
      rank[2] += 1;
      return;
    }
    if (winningCount === 4) {
      rank[3] += 1;
      return;
    }
    if (winningCount === 3) {
      rank[4] += 1;
    }
  });
  return rank;
};

lottoResult.getProfit = ([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) => {
  return 1;
};

module.exports = lottoResult;
