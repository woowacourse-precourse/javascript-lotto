const MissionUtils = require("@woowacourse/mission-utils");
const { validateWinNums, validateBounus, validatePrice } = require("./util.js");
const Lotto = require("./Lotto.js");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

const mapKey = Object.freeze({
  THREE: "3개 일치 (5000원)",
  FOUR: "4개 일치 (50,000원)",
  FIVE: "5개 일치 (1,500,000원)",
  FIVE_BOUNS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  SIX: "6개 일치 (2,000,000,000원)",
});

const priceMap = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BOUNS: 30000000,
  SIX: 2000000000,
})

function initMap(map) {
  map.set(mapKey.THREE, 0);
  map.set(mapKey.FOUR, 0);
  map.set(mapKey.FIVE, 0);
  map.set(mapKey.FIVE_BOUNS, 0);
  map.set(mapKey.SIX, 0);
}

function makeMap(map, result) {
  for (let i = 0; i < result.length; i++) {
    const [winCount, bonusCount] = result[i];
    if (winCount + bonusCount < 3) continue;
    if (winCount + bonusCount === 3) map.set(mapKey.THREE, map.get(mapKey.THREE) + 1);
    if (winCount + bonusCount === 4) map.set(mapKey.FOUR, map.get(mapKey.FOUR) + 1);
    if (winCount + bonusCount === 5) map.set(mapKey.FIVE, map.get(mapKey.FIVE) + 1);
    if (winCount + bonusCount === 6 && bonusCount === 1) map.set(mapKey.FIVE_BOUNS, map.get(mapKey.FIVE_BOUNS) + 1);
    if (winCount + bonusCount === 6 && bonusCount === 0) map.set(mapKey.SIX, map.get(mapKey.SIX) + 1);
  }
}

function calProfit(map){

  let profit = 0;

  for (const [key,value] of map){
    if(key === mapKey.THREE) profit += value*priceMap.THREE;
    if(key === mapKey.FOUR) profit += value*priceMap.FOUR;
    if(key === mapKey.FIVE) profit += value*priceMap.FIVE;
    if(key === mapKey.FIVE_BOUNS) profit += value*priceMap.FIVE_BOUNS;
    if(key === mapKey.SIX) profit += value*priceMap.SIX;
  }

  return profit;
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
    Console.print(map);
    const profit = calProfit(map);
    Console.print(profit);
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
