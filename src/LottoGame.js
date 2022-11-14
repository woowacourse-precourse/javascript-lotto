const MissionUtils = require('@woowacourse/mission-utils');
const LottoUser = require('./LottoUser');
const Lotto = require('./Lotto.js');

class LottoGame {
  #user;
  #raffle;

  constructor() {
    this.#user = undefined;
    this.#raffle = {
      winning: undefined,
      bonus: undefined,
    };
  }

  start() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.#user = new LottoUser(parseInt(amount, 10));
      this.#user.printUserLottos();
      this.inputWinningNumbers();
    });
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      (numbers) => {
        this.#raffle.winning = new Lotto(numbers.split(',').map(Number));
        this.inputBonusNumber();
      },
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      (number) => {
        const numberToInt = parseInt(number);
        Lotto.validateLottoNumber(parseInt(numberToInt));
        this.#raffle.bonus = parseInt(numberToInt);
      },
    );
  }
}

module.exports = LottoGame;
