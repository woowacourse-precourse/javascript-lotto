const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');
const Lotto = require('./Lotto');

const lotto = new Lotto(MESSAGE.LOTTO_INIT_STR);
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
    this.lottoArr.forEach((eachArr) => {
      const parseArr = String('[' + eachArr.join(MESSAGE.SEPERATOR) + ']');
      MissionUtils.Console.print(parseArr);
    });
  }
}

module.exports = UserLotto;
