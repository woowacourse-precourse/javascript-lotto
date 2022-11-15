const { Console, Random } = require("@woowacourse/mission-utils");

const UserValidation = require("./Validation/UserValidation");
const LottoValidation = require("./Validation/LottoValidation");
const Lotto = require("./Lotto");

class User {
  lottoList;
  userMoney;
  constructor() {
    this.lottoList = [];
  }
  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      User.isValidPurchase(money);
      this.userMoney = Number(money);
      const amount = Number(money) / 1000;
      return this.generateLottoArray(amount);
    });
  }
  generateLottoArray(amount) {
    for (let i = 0; i < amount; i++) {
      const randomNumberArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumberArr.sort((a, b) => a - b);
      this.lottoList.push(randomNumberArr);
    }
    return this.showLottoArray();
  }
  showLottoArray() {
    const count = this.lottoList.length;
    Console.print(`${count}개를 구매했습니다.`);
    for (let lottoNumbers of this.lottoList) {
      Console.print(`[${lottoNumbers.join(", ")}]`);
    }
    return this.generateWinnerNumbers();
  }
  generateWinnerNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      let winnerNumberArr = numbers.split(",");
      const lotto = new Lotto(winnerNumberArr);
      const winnerNumbers = lotto
        .getNumbers()
        .map((number) => Number(number))
        .sort((a, b) => a - b);
      return this.generateBonusNumber(winnerNumbers);
    });
  }
  generateBonusNumber(winnerNumbers) {
    Console.readLine("보너스 번호를 입력해 주세요.", (number) => {
      User.isValidBonus(number);
      const bonusNumber = Number(number);
      return this.comparisonOperator(this.lottoList, winnerNumbers, bonusNumber);
    });
  }
  static isValidBonus(number) {
    return LottoValidation.isBonusNotNumber(number) && LottoValidation.checkBonusRange(number) && LottoValidation.isBonusInteger(number);
  }
  static isValidPurchase(number) {
    return UserValidation.isNumber(number) && UserValidation.isDivisible(number) && UserValidation.isUnderMaxPurchase(number) && UserValidation.isPositiveInteger(number);
  }
}

module.exports = User;
