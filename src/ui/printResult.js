const { Console } = require('@woowacourse/mission-utils');

function printResult(matchNumbers) {
  Console.print(`3개 일치 (5,000원) - ${matchNumbers['fifth']}개`);
  Console.print(`4개 일치 (50,000원) - ${matchNumbers['fourth']}개`);
  Console.print(`5개 일치 (1,500,000원) - ${matchNumbers['third']}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchNumbers['second']}개`
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${matchNumbers['first']}개`);
  Console.print(`총 수익률은 ${matchNumbers['RateOfReturn']}%입니다.`);
  Console.close();
}

module.exports = printResult;
