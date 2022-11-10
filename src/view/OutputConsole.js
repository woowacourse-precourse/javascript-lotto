const { Console } = require('@woowacourse/mission-utils');

class OutputConsole {
  userLotto(lotto) {
    Console.print(`${lotto.length}개를 구매했습니다.`);
    lotto.forEach((numbers) => {
      Console.print(numbers);
    });
  }
}

module.exports = OutputConsole;
