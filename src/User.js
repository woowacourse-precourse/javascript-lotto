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
  comparisonOperator(lottoList, winnerNumbers, bonusNumber) {
    let result = [0, 0, 0, 0, 0];
    lottoList.forEach((lottoNumbers) => {
      const count = User.compareOneLotto(lottoNumbers, winnerNumbers, bonusNumber);
      const index = User.getEachResult(count);
      result[index]++;
    });
    return this.calculateTotalRate(result);
  }
  static compareOneLotto(lottoNumbers, winnerNumbers, bonusNumber) {
    let countWin = 0;
    let countBonusWin = 0;
    if (!lottoNumbers.includes(bonusNumber)) {
      // TODO: include로 바꿀것
      winnerNumbers.forEach((number) => {
        if (lottoNumbers.includes(number)) countWin++;
      });
    } else {
      winnerNumbers.forEach((number) => {
        if (lottoNumbers.includes(number)) countBonusWin++;
      });
    }
    return [countWin, countBonusWin];
  }
  static getEachResult(count) {
    if (count[0] === 0) {
      //보너스 있는 판
      if (count[1] === 6) return 3;
    } else {
      // 보너스 없는 판
      if (count[0] === 3) return 0;
      if (count[0] === 4) return 1;
      if (count[0] === 5) return 2;
      if (count[0] === 6) return 4;
    }
  }
  calculateTotalRate(priceCount) {
    const totalPrice = priceCount[0] * 5000 + priceCount[1] * 50000 + priceCount[2] * 1500000 + priceCount[3] * 30000000 + priceCount[4] * 200000000;
    const rateOfReturn = Math.round((totalPrice * 100 * 100) / this.userMoney) / 100;
    return User.showTotalResult(priceCount, rateOfReturn);
  }
  static showTotalResult(priceCount, rateOfReturn) {
    Console.print(`\n당첨 통계
        \n---
        \n3개 일치 (5,000원) - ${priceCount[0]}개
        \n4개 일치 (50,000원) - ${priceCount[1]}개
        \n5개 일치 (1,500,000원) - ${priceCount[2]}개
        \n5개 일치, 보너스 볼 일치 (30,000,000원) - ${priceCount[3]}개
        \n6개 일치 (2,000,000,000원) - ${priceCount[4]}개
        \n총 수익률은 ${rateOfReturn}%입니다.`);
    Console.close();
  }
  static isValidBonus(number) {
    return LottoValidation.isBonusNotNumber(number) && LottoValidation.checkBonusRange(number) && LottoValidation.isBonusInteger(number);
  }
  static isValidPurchase(number) {
    return UserValidation.isNumber(number) && UserValidation.isDivisible(number) && UserValidation.isUnderMaxPurchase(number) && UserValidation.isPositiveInteger(number);
  }
}

module.exports = User;
