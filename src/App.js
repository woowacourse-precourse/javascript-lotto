const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class App {
  #Money;
  #Lotto;
  #Bonus;

  constructor() {
    this.money = 0;
    this.lottoArr = [];
    this.outPut = [];
    this.userNum = [];
    this.bonus = '';
  }

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.', (money) => {
      this.#Money = new Money(money);
      this.money = money;
      this.checkQuantity(money);
    });
    this.userInput();
  }

  checkQuantity(money) {
    const quantity = money / 1000;
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
    this.createLotto(quantity);
  }

  createLotto(quantity) {
    for (let i = 0; i < quantity; i += 1) {
      const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.checkSort(lottoNum);
    }
    this.printLotto(this.lottoArr);
  }

  checkSort(lottoNum) {
    const tempArr = [];
    const sortedNum = lottoNum.sort((a, b) => a - b);
    tempArr.push(sortedNum);
    for (let i = 0; i < tempArr.length; i += 6) {
      this.lottoArr.push(tempArr.slice(i, i + 6));
    }
  }

  printLotto(lottoArr) {
    lottoArr.map((arr) => MissionUtils.Console.print(this.toStr(JSON.stringify(arr.flat()))));
  }

  toStr(arr) {
    let outPut = '';
    for (let i = 0; i < arr.length; i += 1) {
      outPut += arr[i];
      if (arr[i] === ',') outPut += ' ';
    }
    this.outPut = outPut;
    return this.outPut;
  }

  userInput() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      this.userNum = numbers.split(',').map(Number);
      this.#Lotto = new Lotto(this.userNum);
    });
    this.getBonus();
  }

  getBonus() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonus) => {
      this.#Bonus = new Bonus(bonus);
      this.bonus = bonus;
    });
    this.comparePoint();
  }

  comparePoint() {
    for (let num of this.lottoArr.flat()) {
      const sameCnt = this.sameCheck(num);
    }
  }

  sameCheck(num) {
    let sameCnt = 0;
    num.map((number) => {
      if (this.userNum.includes(number)) sameCnt += 1;
    });
    return sameCnt;
  }
}

module.exports = App;
