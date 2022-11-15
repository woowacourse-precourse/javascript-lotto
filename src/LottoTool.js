const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');

class MadeNumber {

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

  static userLotto(answer) {
    let number = MadeNumber.purchaseLotto(answer);
    Console.print(`${number}개를 구매했습니다.`);
  }

}
module.exports = MadeNumber;