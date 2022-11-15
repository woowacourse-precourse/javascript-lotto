const Lotto = require("./Lotto.js");
const { RandomNumInRange, Print } = require("./lib/MissionUtils.js");

const createLotto = (amount) => {
  let lottos = [];
  while (lottos.length < amount) {
    let lottoNumber = createLottoNumber();
    lottos.push(new Lotto(lottoNumber));
    Print(lottoNumber);
  }
  return lottos;
};
//로또들 넘버 중에 중복되는 것이 있는지 => 자동 발행이면 겹칠수도 있다.

const createLottoNumber = () => {
  let numArr = [];
  while (numArr.length < 6) {
    let randomNumber = RandomNumInRange(1, 45);
    numArr.push(randomNumber);
  }
  return numArr.sort((a, b) => a - b);
};

module.exports = { createLotto };
