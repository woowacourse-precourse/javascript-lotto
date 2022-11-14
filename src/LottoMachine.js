const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const User = require("./User");
const LottoManager = require("./LottoManager");
const { MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE } = require("./constants/MessageConstants");


class LottoMachine {
  #money;
  #count;
  user;

  constructor() {
    this.user = new User();
  }

  start() {
    this.inputMoney();
  }

  makeLotto() {
    const numbers = this.makeLottoNumber();
    this.sortLottoNumber(numbers);
    this.printLottoNumber(numbers);
    this.publishLotto(numbers);
  }

  callLottoManager() {
    this.lottoManager = new LottoManager(this.user.usersLottos);
    this.lottoManager.start();    
  }

  inputMoney() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_MONEY, (money) => {
      this.#money = Number(money);
      
      this.checkInputMoney();
      this.printLottoAmount();
      
      for (let index = 0; index < this.#count; index++) {
        this.makeLotto();
      }
      
      this.callLottoManager();
    });
  }

  checkInputMoney() {
    if (this.#money % 1000 !== 0) {
      throw Error(ERROR_MESSAGE.INPUT_MONEY_BE_IN_THOUSANDS);
    }
  }

  printLottoAmount() {
    this.#count = this.#money / 1000;
    MissionUtils.Console.print(`\n${this.#count}` + MESSAGE.BUY_COUNT);
  }

  makeLottoNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  sortLottoNumber(numbers) {
    numbers.sort(function(a, b) {
      return a - b;
    });
  }

  printLottoNumber(numbers) {
    const strNumbers = numbers.join(", ")
    MissionUtils.Console.print(`[${strNumbers}]`);
  }

  publishLotto(numbers) {
    const lotto = new Lotto(numbers);
    const lottoNumbers = lotto.getLottoNumbers();
    this.user.usersLottos.push(lottoNumbers);
  }
}

module.exports = LottoMachine;
