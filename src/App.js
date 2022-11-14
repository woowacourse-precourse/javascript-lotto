const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {
  #totalMoney;
  #lottoArray;
  #winningNums;
  #bonusNum;

  constructor() {
    this.#totalMoney = 0;
    this.#winningNums = [];
    this.#lottoArray = [];
    this.#bonusNum = 0;
  }

  setMoney(money) {
    this.#totalMoney = money;
  }
  getMoney() {
    return this.#totalMoney;
  }
  pushLotto(lotto) {
    this.#lottoArray.push(lotto);
  }
  getLotto() {
    return this.#lottoArray;
  }
  setWinNums(nums) {
    this.#winningNums = nums;
  }
  getWinNums() {
    return this.#winningNums;
  }
  setBonus(num) {
    this.#bonusNum = num;
  }
  getBonus() {
    return this.#bonusNum;
  }

  readMoney() {
    Console.readLine("구입금액을 입력해주세요 : ", (money) => {
      const priceNum = parseInt(money);
      if (priceNum % 1000 !== 0) {
        throw new Error("[ERROR] price가 1000으로 나누어 떨어지지 않습니다.");
      }
      this.setMoney(priceNum);
      Console.print(this.#totalMoney);
      this.buyLotto();
      this.readWinNums();
    })
  }

  buyLotto() {
    const lottoCount = this.getMoney() / 1000;
    Console.print(`${lottoCount}개를 구매했습니다.`)
    for (let i = 1; i <= lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lotto.printLotto();
      this.pushLotto(lotto);
    }
    Console.print(this.getLotto());
  }

  readWinNums() {
    Console.readLine("당첨번호를 입력해주세요. : ", (winNums) => {
      const winNumRegex = /\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}/;
      if (!winNumRegex.test(winNums)) {
        throw new Error("[ERROR] 당첨번호가 입력형식에 맞지 않습니다.");
      }
      const winArray = winNums.split(",").map(Number);
      Console.print(winArray);
      if (!winArray.every(num => 1 <= num && num <= 45)) {
        throw new Error("[ERROR] 당첨번호는 1부터 45까지의 숫자여야 합니다.");
      }
      this.setWinNums(winArray);
      Console.print(this.getWinNums());
    })
  }

  play() {
    this.readMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
