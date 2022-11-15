const { Console } = require('@woowacourse/mission-utils');

class UserInterface {
  chainInput(questionCallbackPairs) {
    if (questionCallbackPairs.length === 0) return Console.close();

    const [question, callback] = questionCallbackPairs[0];

    if (question === null) {
      callback();

      return this.chainInput(questionCallbackPairs.slice(1));
    }

    Console.readLine(question, (answer) => {
      callback(answer);
      this.chainInput(questionCallbackPairs.slice(1));
    });
  }

  printLottoCount(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => Console.print(lotto.getNumbers()));
  }

  printWinningResult(drawer) {
    const results = drawer.getResults();
    const INTRO_MESSAGE = '\n당첨 통계\n---\n';

    results.forEach((result, index) =>
      Console.print(index === 0 ? INTRO_MESSAGE + result : result)
    );
  }

  printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}입니다.`);
  }
}

module.exports = UserInterface;
