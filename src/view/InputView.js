const { Console } = require('@woowacourse/mission-utils');

class InputView {
  static #MESSAGE = Object.freeze({
    inputLottoAmount: '구입금액을 입력해 주세요.\n',
    inputWinningLottoNumbers: '당첨 번호를 입력해 주세요.\n',
    inputBonusNumber: '보너스 번호를 입력해 주세요.\n',
  });

  static inputLottoAmount(callback) {
    Console.readLine(InputView.#MESSAGE.inputLottoAmount, (answer) => {
      callback(Number(answer));
    });
  }

  static inputWinningLottoNumbers(callback) {
    Console.readLine(InputView.#MESSAGE.inputWinningLottoNumbers, (answer) => {
      callback(answer.split(',').map((value) => parseInt(value, 10)));
    });
  }

  static inputBonusNumber(callback) {
    Console.readLine(InputView.#MESSAGE.inputBonusNumber, (answer) => {
      callback(Number(answer));
    });
  }
}

module.exports = InputView;
