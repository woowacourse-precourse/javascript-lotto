const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Validation = require("./Validation");

const RESULT = {
  BONUS: 7,
  FIRST_PLACE: 6,
  SECOND_PLACE: 5,
  THIRD_PLACE: 4,
  FOURTH_PLACE: 3,
};

class Drawer {
  lottos;
  money;
  winningNumber;
  bonusNumber;

  draw(lottos, money) {
    this.lottos = lottos;
    this.money = money;
    this.generateWinningNumbers();
  }

  generateWinningNumbers() {
    this.enterWinningNumbers();
  }

  enterWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers) => {
      const mapfn = (arg) => Number(arg);
      this.winningNumber = Array.from(numbers.split(","), mapfn);

      this.validateWinningNumbers(this.winningNumber);

      return this.enterBonusNumber();
    });
  }
  enterBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      this.bonusNumber = Number(number);

      this.validateBonusNumber(this.bonusNumber);

      return this.checkLottos();
    });
  }

  checkLottos() {
    this.lottos.forEach((lotto) => {
      lotto.result = this.compareNumbers(lotto);
    });

    this.checkResult(this.lottos);
  }

  compareNumbers(lotto) {
    let winningPoint = 0;

    lotto.numbers.forEach((number) => {
      if (this.winningNumber.includes(number)) {
        winningPoint = winningPoint + 1;
      }
    });

    if (winningPoint === 5) {
      if (this.checkBonusNumber(lotto.numbers) === true) {
        return RESULT.BONUS;
      }
    }
    return winningPoint;
  }

  checkBonusNumber(numbers) {
    if (numbers.includes(this.bonusNumber)) {
      return true;
    }
    return false;
  }

  checkResult(lottos) {
    let bonus = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;

    lottos.forEach((lotto) => {
      switch (lotto.result) {
        case RESULT.BONUS:
          bonus = bonus + 1;
          break;
        case RESULT.FIRST_PLACE:
          first = first + 1;
          break;
        case RESULT.SECOND_PLACE:
          second = second + 1;
          break;
        case RESULT.THIRD_PLACE:
          third = third + 1;
          break;
        case RESULT.FOURTH_PLACE:
          fourth = fourth + 1;
          break;
      }
    });

    this.displayResult(bonus, first, second, third, fourth);
  }

  displayResult(bonus, first, second, third, fourth) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${fourth}개`);
    Console.print(`4개 일치 (50,000원) - ${third}개`);
    Console.print(`5개 일치 (1,500,000원) - ${second}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);

    this.rateOfReturn(bonus, first, second, third, fourth);
  }

  rateOfReturn(bonus, first, second, third, fourth) {
    const sum =
      first * 2000000000 +
      bonus * 30000000 +
      second * 1500000 +
      third * 50000 +
      fourth * 5000;

    const result = Math.round((sum / this.money) * 100 * 100) / 100;

    Console.print(`총 수익률은 ${result}%입니다.`);
    Console.close();
  }

  validateWinningNumbers(numbers) {
    const validation = new Validation();

    validation.length(numbers);
    validation.numberRange(numbers);
    validation.isDuplicate(numbers);
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이여야 합니다.");
    }

    this.winningNumber.forEach((number) => {
      if (number === bonusNumber) {
        throw new Error("[ERROR] 보너스 번호는 중복되지 않아야 합니다.");
      }
    });
  }
}

module.exports = Drawer;
