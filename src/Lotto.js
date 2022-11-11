const MissionUtils = require('@woowacourse/mission-utils');
const { THOUSAND } = require('./MESSAGE');
const MESSAGE = require('./MESSAGE');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.LOTTO_SIZE_ERROR);
    }
  }
  validate_indepence(numbers) {
    const setWinLotto = new Set();
    const winLottoArr = [...numbers];
    winLottoArr.forEach((eachLottoNum) => {
      setWinLotto.add(eachLottoNum);
    });
    if (setWinLotto.size !== 6) {
      throw new Error(MESSAGE.LOTTO_SAME_NUMBER_ERROR);
    }
    return numbers;
  }

  // TODO: 추가 기능 구현
  pubishLotto(lottocount) {
    const randomArr = [];
    for (let count = 0; count < lottocount; count += 1) {
      randomArr.push(
        MissionUtils.Random.pickUniqueNumbersInRange(
          MESSAGE.FIRST_RANGE,
          MESSAGE.LAST_RANGE,
          MESSAGE.LOTTO_LENGTH
        )
      );
    }
    return randomArr.sort((a, b) => {
      return a - b;
    });
  }

  getWinLotto() {
    let winLotto;
    MissionUtils.Console.readLine(MESSAGE.LOTTO_WIN, (winNumber) => {
      winLotto = winNumber;
    });
    winLotto = winLotto.replace(MESSAGE.LOTTO_WIN_SEPERATOR, '');
    return this.validate_indepence(winLotto);
  }
}

module.exports = Lotto;
