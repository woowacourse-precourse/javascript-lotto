const { Console, Random } = require("@woowacourse/mission-utils");
const { LOTTO_MSG, LOTTO_PRICE, LOTTO_MIN, LOTTO_MAX, LOTTO_NUMBERS_LENGTH } = require("./constants/lotto.constants");

const UserValidation = require("./validation/UserValidation");

class User {
  static purchaseLotto(nextStep) {
    Console.readLine(LOTTO_MSG.INPUT_MONEY, (userInput) => {
      const expenditure = Number(userInput);
      User.validate(expenditure);
      const numberOfPurchase = expenditure / LOTTO_PRICE;
      Console.print(LOTTO_MSG.NUMBER_OF_PURCHASE(numberOfPurchase));
      nextStep(expenditure, numberOfPurchase);
    });
  }
  static generateLotto(numberOfPurchase) {
    let lottoList = [];
    for (let i = 0; i < numberOfPurchase; i++) {
      const lottoNumbers = User.createRandomSortedNumber();
      lottoList.push(lottoNumbers);
    }
    return lottoList;
  }
  static showLottoList(lottoList) {
    lottoList.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });
  }
  static createRandomSortedNumber() {
    return Random.pickUniqueNumbersInRange(LOTTO_MIN, LOTTO_MAX, LOTTO_NUMBERS_LENGTH).sort((a, b) => a - b);
  }
  static validate(number) {
    UserValidation.isInteger(number);
    UserValidation.isPositive(number);
    UserValidation.isDivisible(number);
    UserValidation.isUnderMaxInteger(number);
  }
}

module.exports = User;
