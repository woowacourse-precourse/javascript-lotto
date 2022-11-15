const Console = require('../utils/Console');
const GRADE = require('../utils/grade');

class GameOutput {
  static message = {
    purchaseAmount: '구입금액을 입력해 주세요.\n',
    sixNumbers: '\n당첨 번호를 입력해 주세요.\n',
    bonus: '\n보너스 번호를 입력해 주세요.\n',
  };

  static printLottos({ quantity, lottos }) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
    Console.print(lottos);
  }

  static printResult({ result, profit }) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${result[GRADE.fifth]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[GRADE.fourth]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[GRADE.third]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[GRADE.second]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[GRADE.first]}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = GameOutput;
