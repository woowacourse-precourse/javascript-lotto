const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const console = MissionUtils.Console;

const LOTTO_NUMBER_LENGTH = 6;
const LOTTO_RANGE_BEGIN = 1;
const LOTTO_RANGE_END = 45;

const ERROR_HEADER = '[ERROR]';
const ERROR_WRONG_LENGTH = `${ERROR_HEADER} 로또 번호는 6개여야 합니다.`;
const ERROR_DUPLICATED = `${ERROR_HEADER} 로또 번호는 중복되지 않아야 합니다.`;
const ERROR_WRONG_RANGE = `${ERROR_HEADER} 로또 번호는 1부터 45까지의 정수여야 합니다.'`;

class App {
  #winningNumbers;
  #bonusNumber;

  isDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  isInRange(number) {
    return (
      /^[0-9]+$/.test(number) &&
      number >= LOTTO_RANGE_BEGIN &&
      number <= LOTTO_RANGE_END
    );
  }

  validateNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_WRONG_LENGTH);
    }
    if (!this.isDistinct(numbers)) {
      throw new Error(ERROR_DUPLICATED);
    }
    numbers.forEach((number) => {
      if (!this.isInRange(Number(number))) {
        throw new Error(ERROR_WRONG_RANGE);
      }
    });
  }

  setWinningNumbers(numbers) {
    this.validateNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.isInRange(number);
    this.#bonusNumber = number;
  }

  play() {
    console.print('구입 금액을 입력해주세요.');
    console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
