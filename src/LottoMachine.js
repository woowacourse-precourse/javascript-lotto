const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  #money;
  #count;

  constructor() {
    this.#money = 0;
    this.#count = 0;
  }

  start() {
    this.inputMoney();

  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#money = Number(money);
      // console.log(this.#money);
      
      this.checkInputMoney();
      this.printLottoAmount();
      for (let index = 0; index < this.#count; index++) {
        this.makeLottoNumber();
      }
      
    });
  }

  checkInputMoney() {
    if (this.#money % 1000 !== 0) {
      throw Error("[ERROR] 1,000원 단위의 금액을 투입해주세요.");
    }
  }

  printLottoAmount() {
    this.#count = this.#money / 1000;
    MissionUtils.Console.print(`\n${this.#count}개를 구매했습니다.`);
  }

  makeLottoNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log(numbers);
  }

}

const lottoMachine = new LottoMachine();
lottoMachine.start();

module.exports = LottoMachine;
