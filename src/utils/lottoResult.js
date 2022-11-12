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
  let bonusResult = 0;

  userLottoNumbers.forEach((userLottoNumber) => {
    if (winningNumbers.includes(userLottoNumber)) {
      winningNumbersResult += 1;
    } else if (bonusNumber === userLottoNumber) {
      bonusResult += 1;
    }
  });

  return [winningNumbersResult, bonusResult];
};

lottoResult.getLank = (matchingNumbersResult) => {
  return 1;
};

module.exports = lottoResult;
