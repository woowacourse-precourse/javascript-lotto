const checkDuplicatedLotto = (input) => {
  const res = {};
  for (const num of input) {
    if (res[num]) return true;
    res[num] = 1;
  }
  return false;
};

const checkAscendingLotto = (input) => {
  input = input[Symbol.iterator]();
  let start = input.next().value;
  for (const next of input) {
    if (start >= next) return false;
    start = next;
  }
  return true;
};

const checkLottoResult = (input, compareInput, bonus) => {};

exports.checkDuplicatedLotto = checkDuplicatedLotto;
exports.checkAscendingLotto = checkAscendingLotto;
exports.checkLottoResult = checkLottoResult;
