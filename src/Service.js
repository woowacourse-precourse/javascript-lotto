const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const ServiceMessage = require('./Constants/ServiceMessages');
const MyLotto = require('./MyLotto');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const Result = require('./Result');

class Service {
  startGame() {
    this.getLottoCount();
  }

  getLottoCount() {
    Console.readLine(ServiceMessage.PURCHASE_INPUT, (amount) => {
      this.amount = amount;
      new Purchase(amount);
      this.printLottoCount(amount);
    });
  }

  printLottoCount() {
    Console.print(`\n${this.amount / 1000}` + ServiceMessage.PURCHASE_MESSAGE);
    this.printLottoNumbers();
  }

  printLottoNumbers() {
    const myLotto = new MyLotto();
    let lottoList = [];
    for (let i = this.amount / 1000; i > 0; i -= 1) {
      lottoList.push(myLotto.generateRandom());
      Console.print(`[${lottoList[lottoList.length - 1].join(', ')}]`);
    }
    this.lottoList = lottoList;
    this.printGetWinningNumber();
  }

  printGetWinningNumber() {
    Console.readLine(ServiceMessage.WINNING_INPUT, (winningNumber) => {
      const lottoArray = winningNumber.split(',').map((number) => number * 1);
      new Lotto(lottoArray);
      this.lottoNumber = winningNumber;
      this.printGetBonusNumber();
    });
  }

  printGetBonusNumber() {
    Console.readLine(ServiceMessage.BONUS_INPUT, (bonusNumber) => {
      new Bonus(bonusNumber);
      this.bonusNumber = bonusNumber;
      this.printResult();
    });
  }

  printResult() {
    const result = new Result();
    let ranking = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < this.lottoList.length; i += 1) {
      let winnings = result.compare(
        this.lottoNumber,
        this.lottoList[i],
        this.bonusNumber
      );
      ranking[winnings] += 1;
    }
    this.ranking = ranking;

    const prizeMoney = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    const gotPrize = ranking.reduce(
      (total, rank, index) => total + rank * prizeMoney[index],
      0
    );
    const yields = (gotPrize / this.amount) * 100;
    Console.print(
      `\n당첨 통계
  ---
  3개 일치 (5,000원) - ${ranking[5]}개
  4개 일치 (50,000원) - ${ranking[4]}개
  5개 일치 (1,500,000원) - ${ranking[3]}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranking[2]}개
  6개 일치 (2,000,000,000원) - ${ranking[1]}개
  총 수익률은 ${yields}%입니다.`
    );
    Console.close();
  }
}

module.exports = Service;
