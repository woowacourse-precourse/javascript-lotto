const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const User = require("./User");
const LottoManager = require("./LottoManager");

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
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
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
      throw Error("[ERROR] 1,000원 단위의 금액을 투입해주세요.");
    }
  }

  printLottoAmount() {
    this.#count = this.#money / 1000;
    MissionUtils.Console.print(`\n${this.#count}개를 구매했습니다.`);
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
    const lottoNumbers = lotto.getterLottoNumbers();
    this.user.usersLottos.push(lottoNumbers);
  }
}

module.exports = LottoMachine;
