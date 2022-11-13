const MissionUtils = require('@woowacourse/mission-utils');
const LottoUser = require('./LottoUser');

class LottoGame {
  #user;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#user = undefined;
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
        this.#winningNumbers = numbers.split(',').map(Number);
        this.inputBonusNumber();
      },
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      (number) => {
        this.#bonusNumber = parseInt(number);
      },
    );
  }
}

module.exports = LottoGame;
