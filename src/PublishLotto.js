const Message = require('../constants/Message');
const { Console, Random } = require('@woowacourse/mission-utils');

class publishLotto {
  static makeLotto () {
    const randomLottoNumber = Random.pickUniqueNumbersInRange(
      Message.MIN_NUMBER,
      Message.MAX_NUMBER,
      Message.LOTTO_LENGTH,
    );
    return randomLottoNumber.sort((front, back) => front - back);
  }

  static arrangeTotalLotto (count) {
    const totalLottoList = [];

    while (totalLottoList.length < count) {
      const Lotto = publishLotto.makeLotto();

      totalLottoList.push(Lotto);
      Console.print(`[${Lotto.join(', ')}]`);
    }

    return totalLottoList;
  }
}

module.exports = publishLotto;
