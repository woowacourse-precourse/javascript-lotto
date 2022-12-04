const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  message: {
    PURCHASE: '구입금액을 입력해 주세요.',
    WINNING: '당첨 번호를 입력해 주세요.',
    BONUS: '보너스 번호를 입력해 주세요.',
  },

  readInput(message, callback) {
    Console.readLine(message, (input) => {
      callback(input);
    });
  },

  readPurchaseAmount(callback) {
    InputView.readInput(InputView.message.PURCHASE, callback);
  },
};

module.exports = InputView;
