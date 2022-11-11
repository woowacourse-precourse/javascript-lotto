const Console = require('./utils/Console');

class GameOutput {
  static printNewLine() {
    Console.print('');
  }

  static printLottoNumber(lottoNumber) {
    Console.print(`${lottoNumber}개를 구매했습니다.`);
  }

  static printLottos(printableLottos) {
    Console.print(printableLottos);
  }
}

module.exports = GameOutput;
