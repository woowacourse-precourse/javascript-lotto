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
};

module.exports = Printer;
