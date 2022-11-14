const Lotto = require("./Lotto.js");
const { RandomNumInRange, Print } = require("./lib/MissionUtils.js");

const createLotto = (amount) => {
  let lottos = [];
  for (let i = 0; i < amount; i++) {
    let lottoNumber = createLottoNumber();
    lottos.push(new Lotto(lottoNumber));
    Print(lottoNumber);
  }
  return lottos;
};

const createLottoNumber = () => {
  let numArr = [];
  while (numArr.length < 6) {
    let randomNumber = RandomNumInRange(1, 45);
    if (!duplicateCheck(randomNumber, numArr)) numArr.push(randomNumber);
  }
  return numArr.sort((a, b) => a - b);
};

const duplicateCheck = (num, arr) => {
  if (arr.includes(num)) return true;
  return false;
};

module.exports = { createLotto };
