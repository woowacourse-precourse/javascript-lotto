const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constants/Message');
const publishLotto =require('./PublishLotto');
const Validator = require('./Validator');
const StaticLotto = require('./staticLotto');
const Lotto = require('./Lotto');

class App {

  constructor () {
    this.staticLotto = new StaticLotto();
  }

  play() {
    this.askPurchasePrice();
  }

  askPurchasePrice () {
    Console.readLine(Message.INPUT_PURCHASE_PRICE, (price) => {
      Validator.inputPurchase(price);
      const priceNumber = Message.getCountLottery(price);

      Console.print(`${priceNumber}${Message.COUNT_LOTTO}`);

      this.staticLotto.setPurchasePrice(price);
      this.staticLotto.setLottoList(
        publishLotto.arrangeTotalLotto(priceNumber),
      );

      this.askWinNumber();
    });
  }

  askWinNumber () {
    Console.readLine(Message.WIN_NUMBER, (number) => {
      const winNumber = number
        .split(',')
        .map(Number)
        .sort((front, back) => front - back);

      this.staticLotto.setWinLotto(new Lotto(winNumber));

      this.askBonusNumber(number);
    });
  }

  askBonusNumber (arr) {
    Console.readLine(Message.BONUS_NUMBER, (number) => {
      Validator.inputBonusNumber(number, arr);
      this.staticLotto.setBonusNumber(number);

      this.winStatistic();
    });
  }

  winStatistic () {
    Console.print(Message.WIN_STAT);
    this.staticLotto.getSameNumberCount();
    this.showRankList();
  }

  showRankList () {
    const rank = this.staticLotto.getRank();
    Console.print(
      
      Message.getTotalMatch(
        rank
      ),
    );
    this.showRevenue();
  }

  showRevenue () {
    Console.print(Message.getTotalRevenue(this.staticLotto.setTotalRevenue()));
  }
}

const app = new App();
app.play();

module.exports = App;
