const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');
const Lotto = require('./Lotto')

class MadeNumber {

  static getLottoNumber() {
    const randomNumberArray = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumberArray.sort((a, b) => {
      return a - b;
    })
    return randomNumberArray;
  }

  static purchaseLotto(answer) {
    if (isNaN(answer)) {
      throw Error(MESSAGE.NAN_ERROR);
    }
    if (answer <= 0) {
      throw Error(MESSAGE.NEGATIVE_NUMBER_ERROR);
    }
    if (answer / 1000 !== parseInt(answer / 1000)) {
      throw Error(MESSAGE.UNIT_ERROR);
    }
    return answer / 1000;
  }

  static shuffleNumber(number) {
    let totalPurchaseArray = [];
    let purchaseArray = [];
    while (totalPurchaseArray.length < number) {
      purchaseArray = MadeNumber.getLottoNumber();
      Console.print(`[${purchaseArray.join(", ")}]`);
      totalPurchaseArray.push(purchaseArray);
    }
    return totalPurchaseArray;
  }

  static userLotto(answer) {
    let number = MadeNumber.purchaseLotto(answer);
    Console.print(`${number}개를 구매했습니다.`);
    let randomLotto = MadeNumber.shuffleNumber(number);
    return randomLotto;
  }

  static checkLotto(number) {
    number = number.split(',');
    [...number].forEach(numbers => {
      if (isNaN(numbers)) {
        throw Error(MESSAGE.NAN_ERROR);
      }
      if (numbers <= 0 || numbers > 45) {
        throw Error(MESSAGE.NUMBER_RANGE_ERROR);
      }
    });
    return new Lotto(number);
  }

  static checkBonusNumber(answer) {
    let bonusArray = answer.split(' ');
    if (isNaN(answer)) {
      throw Error(MESSAGE.NAN_ERROR);
    }
    if (bonusArray.length !== 1) {
      throw Error(MESSAGE.BONUS_ERROR);
    }
    if (answer < 0 || answer > 45) {
      throw Error(MESSAGE.NUMBER_RANGE_ERROR);
    }
  }

}
module.exports = MadeNumber;