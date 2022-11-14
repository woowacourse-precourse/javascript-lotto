const MissionUtils = require('@woowacourse/mission-utils');
const { NUMBER } = require('./constant/constant');

class LottoList {
  creatLottoList(input) {
    const lottoList = [];
    const countLotto = this.countAmountLotto(input);

    Array(countLotto)
      .fill(countLotto)
      .forEach((_) => lottoList.push(this.creatLottoNumber()));

    return lottoList;
  }

  creatLottoNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.ONE,
      NUMBER.FORTY_FIVE,
      NUMBER.SIX
    );
    return randomNumber.sort((a, b) => a - b);
  }

  countAmountLotto(input) {
    return Number(input.slice(NUMBER.ZERO, input.length - NUMBER.THREE));
  }
}

module.exports = LottoList;
