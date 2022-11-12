const Console = require('../domains/Console');

class GameOutput {
  static message = {
    purchaseAmount: '구입금액을 입력해 주세요.\n',
    sixNumbers: '당첨 번호를 입력해 주세요.\n',
    bonus: '보너스 번호를 입력해 주세요.\n',
  };

  static printNewLine() {
    Console.print('');
  }

  static printQuantityOfLotto(quantityOfLotto) {
    Console.print(`${quantityOfLotto}개를 구매했습니다.`);
  }

  static printLottos(printableLottos) {
    Console.print(printableLottos);
  }
}

module.exports = GameOutput;
