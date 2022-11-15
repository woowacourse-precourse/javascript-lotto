const MissionUtils = require("@woowacourse/mission-utils");
const { validateWinNums, validateBounus, validatePrice } = require("./vadiation.js");
const Lotto = require("./Lotto.js");
const {calProfit, printMap, printProfit} = require("./profitFn");
const {initMap, makeMap, printMap} = require("./mapFn");
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
      Console.readLine("구입금액을 입력해주세요.\n", (money) => {
        const validation = validatePrice(money);
        if (!validation[0]) {
          reject(validation[1]);
        }
        resolve(this.setMoney(validation[1]));
      })

    })
  }

  buyLotto() {
    const lottoCount = this.getMoney() / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 1; i <= lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lotto.printLotto();
      this.pushLotto(lotto);
    }
  }

  readWinNums() {
    return new Promise((resolve, reject) => {
      Console.readLine("\n당첨번호를 입력해주세요\n", (winNums) => {
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
      Console.readLine("\n보너스 넘버를 입력해주세요.\n", (bonus) => {
        const bonusNum = parseInt(bonus);
        const validation = validateBounus(bonusNum, this.getWinNums());
        if (!validation[0]) {
          reject(validation[1]);
        }
        resolve(this.setBonus(validation[1]));
      })
    })
  }

  makeResult() {
    const [lottos, winNums, bonus] = [this.getLotto(), this.getWinNums(), this.getBonus()];
    const result = [];
    const map = new Map();
    lottos.forEach(lotto => {
      const winCount = lotto.filter(winNums).length;
      const bonusCount = lotto.includes(bonus) ? 1 : 0;
      result.push([winCount, bonusCount]);
    });
    initMap(map);
    makeMap(map, result);
    printMap(map);
    const profit = calProfit(map);
    printProfit(profit, this.getMoney());
  }



  async play() {
    try {
      await this.readMoney();
      this.buyLotto();
      await this.readWinNums();
      await this.readBonusNum();
      this.makeResult();
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
