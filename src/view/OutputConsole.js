const { Console } = require('@woowacourse/mission-utils');

class OutputConsole {
  printUserLotto(lotto) {
    Console.print(`\n${lotto.length}개를 구매했습니다.`);
    lotto.forEach((numbers) => {
      Console.print(numbers);
    });
  }

  printLank([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${thirdPlace}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondPlace}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${firstPlace}개`);
  }
}

module.exports = OutputConsole;
