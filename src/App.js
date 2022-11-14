const MissionUtils = require("@woowacourse/mission-utils");
const { validateWinNums, } = require("./util");
const Lotto = require("./Lotto.js");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

function validateBounus(bonusNum, winNums) {

  if (isNaN(bonusNum)) {
    return [false, new Error("[ERROR] 보너스번호는 숫자여야 합니다.")];
  }

  if (winNums.includes(bonusNum)) {
    return [false, new Error("[ERROR] 보너스 번호가 당첨번호에 포함되어 있습니다.")];
  }

  return [true, bonusNum];
}

function validatePrice(price) {
  const priceNum = parseInt(money);

  if (isNaN(priceNum)) {
    return [false, new Error("[ERROR] price는 숫자여야 합니다.")];
  }
  if (priceNum % 1000 !== 0) {
    return [false, new Error("[ERROR] price가 1000으로 나누어 떨어지지 않습니다.")];
  }

  return [true, priceNum];
}

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
    return [...this.#lottoArray];
  }
  setWinNums(nums) {
    this.#winningNums = nums;
  }
  getWinNums() {
    return [...this.#winningNums];
  }
  setBonus(num) {
    this.#bonusNum = num;
  }
  getBonus() {
    return this.#bonusNum;
  }

  readMoney() {
    return new Promise((resolve, reject) => {
      Console.readLine("구입금액을 입력해주세요 : ", (money) => {
        const validation = validatePrice(money);
        if (!validation[0]) {
          reject(validation[1]);
        }
        resolve(this.setMoney(validation[1]));
      })
          
      })
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
  }

  readWinNums() {

    return new Promise((resolve, reject) => {
      Console.readLine("당첨번호를 입력해주세요. : ", (winNums) => {
        const validation = validateWinNums(winNums);
        if (!validation[0]) {
          reject(validation[1]);
        }
        resolve(this.setWinNums(validation[1]));
      })
    })
  }

  readBonusNum() {
    return new Promise((resolve, reject) => {
      Console.readLine("보너스 넘버를 입력해주세요. : ", (bonus) => {
        const bonusNum = parseInt(bonus);
        const validation = validateBounus(bonusNum, this.getWinNums());
        if (!validation[0]) {
          reject(validation[1]);
        }
        resolve(this.setBonus(validation[1]));
      })
    })

  }

  async play() {
    try {
      await this.readMoney();
      this.buyLotto();
      await this.readWinNums();
      await this.readBonusNum();
      Console.print(this.getBonus());
    }
    catch (err) {
      Console.print(err.message);
      Console.print("프로그램을 종료합니다.");
      Console.close();
    }

  }
}

const app = new App();
app.play();

module.exports = App;
