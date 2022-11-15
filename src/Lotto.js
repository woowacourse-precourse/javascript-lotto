const { Console, Random } = require('@woowacourse/mission-utils');
const {
  THOUSAND,
  LOTTO_LENGTH,
  LOTTO_SIZE_ERROR,
  LOTTO_SAME_NUMBER_ERROR,
  FIRST_RANGE,
  LOTTO_WIN,
  LOTTO_WIN_SEPERATOR,
  LOTTO_BONUS,
} = require('./MESSAGE');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
    this.validate_indepence(numbers);
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(LOTTO_SIZE_ERROR);
    }
    return true;
  }
  validate_indepence(numbers) {
    const setWinLotto = new Set();
    const winLottoArr = [...numbers];
    winLottoArr.forEach((eachLottoNum) => {
      setWinLotto.add(eachLottoNum);
    });
    if (setWinLotto.size !== LOTTO_LENGTH) {
      throw new Error(LOTTO_SAME_NUMBER_ERROR);
    }
    return true;
  }

  // TODO: 추가 기능 구현
  pubishLotto(lottocount) {
    const randomArr = [];
    for (let count = 0; count < lottocount; count += 1) {
      randomArr.push(
        Random.pickUniqueNumbersInRange(FIRST_RANGE, LOTTO_LENGTH, LOTTO_LENGTH)
      );
    }
    return randomArr.sort((a, b) => {
      return a - b;
    });
  }

  WinLottoReplace(winlotto) {
    winlotto = winlotto.split(',');
    return winlotto.map(Number);
  }

  getWinLotto() {
    let winLotto;
    Console.readLine(LOTTO_WIN, (winNumber) => {
      winLotto = winNumber;
    });
    Console.print(winLotto);
    winLotto = this.WinLottoReplace(winLotto);
    this.validate(winLotto);
    this.validate_indepence(winLotto);
    return winLotto;
  }

  getBounsLotto() {
    let bounsLotto;
    Console.readLine(LOTTO_BONUS, (bonusNumber) => {
      bounsLotto = bonusNumber;
    });
    return bounsLotto;
  }
}

module.exports = Lotto;
