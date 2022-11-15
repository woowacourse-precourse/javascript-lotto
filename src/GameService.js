const IssueLotto = require('./components/IssueLotto');
const JudgeLotto = require('./components/JudgeLotto');
const WinStatistics = require('./components/WinStatistics');
const EarningRate = require('./components/EarningRate');
const Validation = require('./components/Validation');
const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT,
  OUTPUT_PURCHASE,
  OUTPUT_STATISTICS,
  OUTPUT_EARNING_RATE,
} = require('./constant/constant');

class GameService {
  buyLotto() {
    Console.readLine(INPUT.GET_PURCHASE, (input) => {
      const purchase = Number(input);
      const [lottos, count] = IssueLotto.setLotteryNumber(purchase);
      Console.print(OUTPUT_PURCHASE(count));
      lottos.forEach((lotto) => {
        Console.print(`[${lotto.getNumbers().join(', ')}]`);
      });
      this.typedWinNumber({ lottos, purchase });
    });
  }

  typedWinNumber({ lottos, purchase }) {
    Console.readLine(INPUT.GET_WIN_NUMBER, (input) => {
      const wins = input.split(',').map((number) => Number(number));
      Validation.validateLotto(wins);
      this.typedBonusNumber({ lottos, wins, purchase });
    });
  }

  typedBonusNumber({ lottos, wins, purchase }) {
    Console.readLine(INPUT.GET_BONUS_NUMBER, (input) => {
      const bonus = Number(input);
      Validation.validateBonus(bonus);
      this.printWinStatistics({ lottos, wins, bonus, purchase });
    });
  }

  printWinStatistics({ lottos, wins, bonus, purchase }) {
    const judgeLotto = JudgeLotto.compareLotto({ lottos, wins, bonus });
    const winPlace = WinStatistics.getWinStatistics(judgeLotto);
    Console.print(OUTPUT_STATISTICS(winPlace));
    this.printEarningRate({ winPlace, purchase });
  }

  printEarningRate({ winPlace, purchase }) {
    const earningRate = EarningRate.getEarningRate({ winPlace, purchase });
    Console.print(OUTPUT_EARNING_RATE(earningRate));
    Console.close();
  }
}

module.exports = GameService;
