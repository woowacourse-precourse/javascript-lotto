const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');

class LottoMain {
  static takeBonus(lottoList, prize) {
    ConsoleWork.takeInput(Message.BONUSNUMBER_MESSAGE + '\n', function (bonus) {
      printResult(lottoList, prize, bonus);
    });
  }
}

function printResult(lottoList, prize, bonus) {
  ConsoleWork.print('당첨 통계\n---\n');
}

module.exports = LottoMain;
