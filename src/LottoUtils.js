const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");

const createLotto = (amount) => {
  let lottos = [];
  while (lottos.length < amount) {
    let lottoNumber = createLottoNumber();
    lottos.push(new Lotto(lottoNumber));
    Console.print(`[${String(lottoNumber).split(",").join(", ")}]`);
  }
  return lottos;
};
//로또들 넘버 중에 중복되는 것이 있는지 => 자동 발행이면 겹칠수도 있다.

const createLottoNumber = () => {
  const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomNumber.sort((a, b) => a - b);
};
module.exports = { createLotto };
