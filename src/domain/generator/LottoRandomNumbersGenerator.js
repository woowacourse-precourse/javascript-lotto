const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../lotto/Lotto');
const LottoNumber = require('../lotto/LottoNumber');

const LottoRandomNumbersGenerator = {
  generate() {
    const { min, max } = LottoNumber.RANGE;
    const size = Lotto.SIZE;
    const sortByNumber = (a, b) => a - b;

    return Random.pickUniqueNumbersInRange(min, max, size).sort(sortByNumber);
  },
};

module.exports = LottoRandomNumbersGenerator;
