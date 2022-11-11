const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');
const Lotto = require('./Lotto');

const lotto = new Lotto('123456');
class UserLotto {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoArr = [];
  }

  getUserLottos(numbers) {
    this.lottoArr = lotto.pubishLotto(numbers);
  }

  printLottos() {
    this.lottoArr.forEach((eachArr, index) => {
      const parseArr = String(
        '[' + eachArr.join(MESSAGE.USER_LOTTO_SEPERATOR) + ']'
      );
      MissionUtils.Console.print(parseArr);
    });
  }
  compareLotto(myLotto, winLotto) {
    const numberCounter = 0;
    const winLottoArr = [...winLotto];
    myLotto.forEach((eachLottoNumber) => {
      if (winLottoArr.includes(String(eachLottoNumber))) {
        numberCounter += 1;
      }
    });
    return numberCounter;
  }
}

module.exports = UserLotto;
