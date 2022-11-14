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
    this.cnt = 0;
    this.winnig = [0, 0, 0, 0, 0];
    this.reward = 0;
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
      if(sameCnt > 2) this.checkReward(sameCnt);
    }
  }

  sameCheck(num) {
    let sameCnt = 0;
    num.map((number) => {
      if (this.userNum.includes(number)) sameCnt += 1;
    });
    return sameCnt;
  }

  checkReward(cnt) {
    if (cnt === 3) {
      this.winnig[0] += 1;
      this.reward += 5000;
    }
    if (cnt === 4) {
      this.winnig[1] += 1;
      this.reward += 50000;
    }
    if (cnt === 5) {
      if (this.lottoArr.includes(this.bonus)) {
        this.winnig[3] += 1;
        this.reward += 30000000;
      }
      this.winnig[2] += 1;
      this.reward += 1500000;
    }
    if (cnt === 6) {
      this.winnig[4] += 1;
      this.reward += 2000000000;
    }
    this.result();
  }

  result() {
    MissionUtils.Console.print('당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.winnig[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.winnig[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.winnig[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winnig[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.winnig[4]}개`);

    this.checkYield();
  }

  checkYield() {
    const PERCENT = (this.reward / this.money) * 100;
    MissionUtils.Console.print(`총 수익률은 ${PERCENT.toFixed(1)}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = App;
