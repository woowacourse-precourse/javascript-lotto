const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');
const Lotto = require('./Lotto');

const lotto = new Lotto(MESSAGE.LOTTO_INIT_STR);
class UserLotto {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
  }

  getUserLottos(numbers) {
    return lotto.pubishLotto(numbers);
  }

  printLottos(Lottos) {
    Lottos.forEach((eachLotto, index) => {
      const parseArr = String(
        '[' + eachLotto.join(MESSAGE.USER_LOTTO_SEPERATOR) + ']'
      );
      MissionUtils.Console.print(parseArr);
    });
  }
  /*
  array,string compare
  */
  compareLotto(myLotto, winLotto) {
    let numberCounter = 0;
    const winLottoArr = [...winLotto];
    myLotto.forEach((eachLottoNumber) => {
      if (winLottoArr.includes(String(eachLottoNumber))) {
        numberCounter += 1;
      }
    });
    return numberCounter;
  }

  compareBonusNumber(myLotto, bonusNumber) {
    if (myLotto.includes(Number(bonusNumber))) {
      return true;
    }
    return false;
  }
}

module.exports = UserLotto;
