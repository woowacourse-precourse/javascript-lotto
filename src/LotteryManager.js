const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Consumer = require('./Consumer');
const { INGAME_MESSAGE } = require('./Constants');

class LotteryManager {
  start() {
    this.create();
  }

  create() {
    Console.readLine(INGAME_MESSAGE.buy, (money) => {
      const consumer = new Consumer(money);
      consumer.printLottery();
      //   this.pick(consumer);
    });
  }

  pick(consumer) {
    // Console.readLine((picks) => {
    //   const lotto = new Lotto(picks);
    // });
  }

  printLottery() {}

  checkWinLottery() {}
}

const manager = new LotteryManager();
manager.start();

exports.module = LotteryManager;
