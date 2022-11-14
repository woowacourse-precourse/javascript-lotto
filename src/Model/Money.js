const Lotto = require("./Lotto");
const { INPUTS } = require("../constants");

class money {
  #money;

  constructor(money) {}

  //로또 뽑기 logic
  randomLottoNumber() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNum;
  }

  randomBonusNumber() {
    // const bonusNum = Random.
  }

  inputMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      //8개 구매했습니다. 8개 당첨로또 로직
    });
  }
}

module.exports = Money;
// const b = new Lotto();
