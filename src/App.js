const MissionUtils = require("@woowacourse/mission-utils");
const { validateWinNums, validateBounus, validatePrice } = require("./vadiation.js");
const Lotto = require("./Lotto.js");
const { calProfit, printProfit } = require("./profitFn");
const { initMap, makeMap, printMap } = require("./mapFn");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {
  #totalMoney;
  #lottoArray; //2차원배열
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

  play() {
    this.readMoney();
  }

  readMoney() {
    Console.readLine("구입금액을 입력해주세요. : ", (money) => {
      const validation = validatePrice(money);
      this.setMoney(validation);
      this.buyLotto();
    })
  }

  buyLotto() {
    const lottoCount = this.getMoney() / 1000;
    Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let i = 1; i <= lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.pushLotto(lotto);
    }
    this.readWinNums();
  }

  readWinNums() {
    Console.readLine("당첨번호를 입력해주세요", (winNums) => {
      const validation = validateWinNums(winNums);
      this.setWinNums(validation);
      this.readBonusNum();
    })
  }

  readBonusNum() {
    Console.readLine("보너스 넘버를 입력해주세요.", (bonus) => {
      const bonusNum = parseInt(bonus);
      const validation = validateBounus(bonusNum, this.getWinNums());
      this.setBonus(validation);
      this.makeResult();
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
    Console.close();
  }
}


const app = new App();
app.play();

module.exports = App;
