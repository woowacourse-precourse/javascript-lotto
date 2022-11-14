const checkDuplicatedLotto = (input) => {
  const res = {};
  for (const num of input) {
    if (res[num]) return true;
    res[num] = 1;
  }
  return false;
};

const checkAscendingLotto = (input) => {};

const checkLottoResult = (input, compareInput, bonus) => {};

exports.checkDuplicatedLotto = checkDuplicatedLotto;
exports.checkAscendingLotto = checkAscendingLotto;
exports.checkLottoResult = checkLottoResult;
