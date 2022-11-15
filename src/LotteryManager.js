const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Components/Lotto');
const Consumer = require('./Components/Consumer');
const CheckLottery = require('./Utils/CheckLottery');
const PrintMessage = require('./Utils/PrintMessage');

class LotteryManager {
  Consumer;

  Lotto;

  start() {
    this.create();
  }

  create() {
    Console.readLine(PrintMessage.printBuyMessage(), (money) => {
      this.Consumer = new Consumer(money);
      this.pickMain();
    });
  }

  pickMain() {
    Console.readLine(PrintMessage.printPickMainMessage(), (mainPick) => {
      this.pickBonus(mainPick);
    });
  }

  pickBonus(mainPick) {
    Console.readLine(PrintMessage.printPickBonusMessage(), (bonusPick) => {
      this.Lotto = new Lotto(mainPick, bonusPick);
      this.check();
    });
  }

  check() {
    const [winList, total] = CheckLottery.checkWinLottery(this.Consumer, this.Lotto);
    this.result(winList, total);
  }

  result(winList, total) {
    const money = this.Consumer.getMoney();
    PrintMessage.printWinLottery(winList);
    PrintMessage.printProfit(total, money);
    return Console.close();
  }
}

module.exports = LotteryManager;
