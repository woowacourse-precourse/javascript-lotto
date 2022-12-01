const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  MESSAGE: Object.freeze({
    inputLottoAmount: '구입금액을 입력해 주세요.\n',
    inputWinningLottoNumbers: '당첨 번호를 입력해 주세요.\n',
    inputBonusNumber: '보너스 번호를 입력해 주세요.\n',
  }),

  readLottoAmount(callback) {
    Console.readLine(InputView.MESSAGE.inputLottoAmount, (answer) => {
      callback(Number(answer));
    });
  },

  readWinningLottoNumbers(callback) {
    Console.readLine(InputView.MESSAGE.inputWinningLottoNumbers, (answer) => {
      callback(answer.split(',').map((value) => parseInt(value, 10)));
    });
  },

  readBonusNumber(callback) {
    Console.readLine(InputView.MESSAGE.inputBonusNumber, (answer) => {
      callback(Number(answer));
    });
  },
};

module.exports = InputView;
