const { Console } = require('@woowacourse/mission-utils');
const IssueLotto = require('./components/IssueLotto');
const JudgeLotto = require('./components/JudgeLotto');
const WinStatistics = require('./components/WinStatistics');
const EarningRate = require('./components/EarningRate');

class App {
  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const purchase = Number(input);
      const [lottos, count] = IssueLotto.setLotteryNumber(purchase);
      Console.print(`\n${count}개를 구매했습니다.`);
      lottos.forEach((lotto) => {
        Console.print(`[${lotto.getNumbers().join(', ')}]`);
      });
      this.typedWinNumber({ lottos, purchase });
    });
  }

  typedWinNumber({ lottos, purchase }) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      const wins = input.split(',').map((number) => Number(number));
      this.typedBonusNumber({ lottos, wins, purchase });
    });
  }

  typedBonusNumber({ lottos, wins, purchase }) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      const bonus = Number(input);
      this.printWinStatistics({ lottos, wins, bonus, purchase });
    });
  }

  printWinStatistics({ lottos, wins, bonus, purchase }) {
    const judgeLotto = JudgeLotto.compareLotto({ lottos, wins, bonus });
    const winPlace = WinStatistics.getWinStatistics(judgeLotto);
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winPlace.fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${winPlace.fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winPlace.thirdPlace}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winPlace.secondPlace}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winPlace.firstPlace}개`);
    this.printEarningRate({ winPlace, purchase });
  }

  printEarningRate({ winPlace, purchase }) {
    const earningRate = EarningRate.getEarningRate({ winPlace, purchase });
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
