const { Console, Random } = require('@woowacourse/mission-utils');
const {
  UNIT_OF_AMOUNT,
  VALID_LENGTH,
  VALID_MIN_NUM,
  VALID_MAX_NUM,
} = require('./constant/index');
const { RESULT } = require('./constant/Result');
const Lotto = require('./Lotto');
const { convertToNumber, convertToNumberArray } = require('./util/convert');
const { validateUnitOfAmount, validateMinAmount } = require('./util/validate');
const WinningLotto = require('./WinningLotto');

class App {
  #lotto;
  #winningLotto;
  #bonusNumber;
  #result;

  constructor() {
    this.#lotto = [];
    this.#winningLotto = [];
    this.#bonusNumber = null;
    this.#result = {
      FIFTH_PLACE: 0,
      FORTH_PLACE: 0,
      THIRD_PLACE: 0,
      SECOND_PLACE: 0,
      FIRST_PLACE: 0,
    };
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const money = convertToNumber(answer);

      this.validate(money);

      const quantutyOfLotto = this.getQuantityOfLotto(money);
      this.createLotto(quantutyOfLotto);
    });
  }

  validate(money) {
    validateUnitOfAmount(money);
    validateMinAmount(money);
  }

  getQuantityOfLotto(amount) {
    return Math.floor(amount / UNIT_OF_AMOUNT);
  }

  printMessage(message) {
    return Console.print(message);
  }

  createLotto(number) {
    this.printMessage(`${number}개를 구매했습니다.`);

    for (let i = 0; i < number; i++) {
      const generateLottoNumbers = Random.pickUniqueNumbersInRange(
        VALID_MIN_NUM,
        VALID_MAX_NUM,
        VALID_LENGTH
      );
      generateLottoNumbers.sort((a, b) => a - b);

      const playerLotto = new Lotto(generateLottoNumbers);
      playerLotto.print();
      this.#lotto.push(playerLotto.Lotto());
    }

    this.setWinningLotto();
  }

  setWinningLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      const setWinningnumbers = convertToNumberArray(answer);
      this.#winningLotto = new WinningLotto(setWinningnumbers);

      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      const number = convertToNumber(answer);
      this.#winningLotto.validateBonusNumber(number);
      this.#bonusNumber = this.#winningLotto.BonusNumber();

      this.compareLotto();
    });
  }

  compareLotto() {
    for (const lottoNumber of this.#lotto) {
      const matchNumber = lottoNumber.filter((number) =>
        this.#winningLotto.WinningLotto().includes(number)
      ).length;
      const hasBonusNumber = lottoNumber.includes(this.#bonusNumber);
      this.setMatchCount(matchNumber, hasBonusNumber);
    }

    this.printResult();
  }

  setMatchCount(matchNumber, hasBonusNumber) {
    if (matchNumber < 3) return;
    if (matchNumber === 3) {
      this.#result.FIFTH_PLACE += 1;
      return;
    }
    if (matchNumber === 4) {
      this.#result.FORTH_PLACE += 1;
      return;
    }
    if (matchNumber === 5) {
      if (hasBonusNumber) {
        this.#result.SECOND_PLACE += 1;
        return;
      }
      this.#result.THIRD_PLACE += 1;
      return;
    }
    if (matchNumber === 6) {
      this.#result.FIRST_PLACE += 1;
      return;
    }
  }

  printResult() {
    Console.print('당첨 통계\n---');
    for (const place in this.#result) {
      Console.print(
        `${RESULT[`${place}`].DESCRIPTION} - ${this.#result[place]}개`
      );
    }
  }
}

const app = new App();
app.play();

module.exports = App;
