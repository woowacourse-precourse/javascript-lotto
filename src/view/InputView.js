const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  message(type) {
    return {
      INPUT_LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
      INPUT_WINNING_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
      INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
    }[type] ?? '타입 없음';
  },

  readLottoAmount(callback) {
    Console.readLine(this.message('INPUT_LOTTO_AMOUNT'), (answer) => {
      callback(Number(answer));
    });
  },

  readWinningLottoNumbers(callback) {
    Console.readLine(this.message('INPUT_WINNING_LOTTO_NUMBERS'), (answer) => {
      callback(answer.split(',').map((value) => parseInt(value, 10)));
    });
  },

  readBonusNumber(callback) {
    Console.readLine(this.message('INPUT_BONUS_NUMBER'), (answer) => {
      callback(Number(answer));
    });
  },
};

module.exports = InputView;
