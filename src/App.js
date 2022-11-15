const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  #ticketCnt;
  #purchased;
  #winNumbers;
  #bonusNumber;
  #gradeList;

  constructor() {
    this.#ticketCnt = 0;
    this.#purchased = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
    this.#gradeList = [0, 0, 0, 0, 0]; // 앞에서부터 각각 1등, 2등... 5등까지 당첨 로또 수
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#inputMoneyExceptionCheck(money);
      this.#ticketCnt = money / 1000;
      this.#generateLotto();
      this.#printPurchasedLotto();
      this.#getWinNum();
    });
  }
  #inputMoneyExceptionCheck(money) {
    if (this.#stringHasNaN(money))
      throw new Error('[ERROR] 금액은 숫자로 입력해 주세요');
    if (money % 1000 !== 0)
      throw new Error('[ERROR] 금액은 1000원 단위로 입력해 주세요');
  }
  #stringHasNaN(money) {
    for (let i = 0; i < money.length; ++i) {
      if (
        money.charCodeAt(i) < '0'.charCodeAt(0) ||
        money.charCodeAt(i) > '9'.charCodeAt(0)
      )
        return true;
    }
    return false;
  }

  #generateLotto() {
    for (let i = 0; i < this.#ticketCnt; ++i) {
      this.#purchased.push(new Lotto(this.#numGenerator()));
    }
  }
  #numGenerator() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  #printPurchasedLotto() {
    MissionUtils.Console.print(`\n${this.#ticketCnt}개를 구매했습니다.`);
    this.#purchased.map((lotto) => lotto.printNumbers());
  }

  #getWinNum() {
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      (winNum) => {
        this.#inputWinNumExceptionCheck(winNum);
        this.#getBonusNum();
      }
    );
  }
  #inputWinNumExceptionCheck(winNum) {
    winNum.split(',').forEach((num) => this.#winNumbers.push(parseInt(num)));
    this.#validateInputWinNum();
  }
  #validateInputWinNum() {
    if (this.#winNumbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (this.#arrHasNaN(this.#winNumbers)) {
      throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
    }
    if ([...new Set(this.#winNumbers)].length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
    if (this.#outOfRange(this.#winNumbers)) {
      throw new Error('[ERROR] 로또 번호 1 이상 45 이하여야만 합니다.');
    }
  }
  #arrHasNaN(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
      if (typeof numbers[i] !== 'number') return true;
    }
    return false;
  }
  #outOfRange(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i] < 1 || numbers[i] > 45) return true;
    }
  }

  #getBonusNum() {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      (secondNum) => {
        this.#bonusNumber = parseInt(secondNum);
        this.#inputBonusNumExceptionCheck();
        this.#calGrade();
      }
    );
  }
  #inputBonusNumExceptionCheck() {
    if (typeof this.#bonusNumber !== 'number')
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    if (this.#winNumbers.includes(this.#bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.');
  }

  #calGrade() {
    this.#purchased.forEach((lotto) => {
      const grade = lotto.grade(this.#winNumbers, this.#bonusNumber);
      if (grade < 5) this.#gradeList[grade] += 1;
    });
  }
}

module.exports = App;
