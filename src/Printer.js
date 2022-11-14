const Uitls = require('./Utils');
const Constant = require('./Constant');

let Printer = class {
  static startGame() {
    Uitls.printMessage(Constant.GAME_PROGRESS_MESSAGES.ENTER_AMOUNT);
  }

  static askWinningNumber() {
    Uitls.printMessage(Constant.GAME_PROGRESS_MESSAGES.ENTER_WINNING_NUMBER);
  }

  static askBonusNumber() {
    Uitls.printMessage(Constant.GAME_PROGRESS_MESSAGES.ENTER_BONUS_NUMBER);
  }

  static lottos(arrays) {
    arrays.forEach((array) => Uitls.printMessage(`[${array.join(',')}]`));
  }

  static result(obj, statistics) {
    Uitls.printMessage(`
    3개 일치 (5,000원) - ${obj[5]}개
    4개 일치 (50,000원) - ${obj[4]}개
    5개 일치 (1,500,000원) - ${obj[3]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${obj[2]}개
    6개 일치 (2,000,000,000원) - ${obj[1]}개
    총수익률은 ${statistics}%입니다.`);
  }
};

module.exports = Printer;
