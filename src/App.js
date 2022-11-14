const MissionUtils = require("@woowacourse/mission-utils");
const isThousand = require("../src/utils/isThousand.js");
const buyLottoCount = require("../src/utils/buyLottoCount.js");
const isAllDifferent = require("../src/utils/isAllDifferent.js");
const isOneToFF = require("../src/utils/isOnetoFF.js");
const isNumber = require("../src/utils/isNumber.js");
const Lotto = require("../src/Lotto");
const { Console, Random } = MissionUtils;
class App {
  #money;
  #bonusNumber;
  #lottos;
  #lottoCnt;
  constructor() {
    this.#money = 0;
    this.#bonusNumber = 0;
    this.#lottoCnt = 0;
    this.#lottos = [];
  }
  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요. \n", (input) => {
      if (!isThousand(input))
        throw new Error("[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.");
      this.#money = parseInt(input);
      this.#lottoCnt = buyLottoCount(input);
      Console.print(`${this.#lottoCnt}개를 구매했습니다.\n`);
      this.makeRandomLottoNumber();
      this.printLottoNumbers();
    });
  }
  makeRandomLottoNumber() {
    while (this.#lottoCnt--) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(numbers);
    }
  }
  printLottoNumbers() {
    this.#lottos.forEach((item) => {
      Console.print(item);
    });
    this.inputNumbers();
  }

  inputNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요. \n", (input) => {
      const realInput = input.split(",").join("");
      if (
        !isAllDifferent(realInput) ||
        !isOneToFF(realInput) ||
        !isNumber(realInput)
      )
        throw new Error("[ERROR] 잘못된 수를 입력하였습니다.");
      const lotto = new Lotto([...realInput]);
      lotto.validate(realInput);
      lotto.printSuccessNumbers();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요. \n", (input) => {
      if (!isNumber(input) || !isOneToFF(input))
        throw new Error("[ERROR] 잘못된 수를 입력하였습니다.");
      this.#bonusNumber = input;
    });
  }
  play() {
    this.inputMoney();
  }
}

const app = new App();
app.play();
module.exports = App;
