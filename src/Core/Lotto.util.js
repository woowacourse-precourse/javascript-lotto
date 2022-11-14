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

const makeCountObj = (input) => {
  const res = {};
  for (const num of input) res[num] = 1;
  return res;
};

const checkLottoResult = (input, compareInput, bonus) => {
  const res = makeCountObj(input);
  let count = compareInput.reduce((acc, cur) => (res[cur] ? acc + 1 : acc), 0);
  if (count === 5 && res[bonus]) count += 2;
  return count;
};

exports.checkDuplicatedLotto = checkDuplicatedLotto;
exports.checkAscendingLotto = checkAscendingLotto;
exports.checkLottoResult = checkLottoResult;
