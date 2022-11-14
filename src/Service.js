const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const ServiceMessage = require('./Constants/ServiceMessages');
const MyLotto = require('./MyLotto');

class Service {
  printLottoCount() {
    Console.readLine(ServiceMessage.PURCHASE_INPUT, (amount) => {
      this.amount = amount;
      new Purchase(amount);
      Console.print(amount / 1000 + ServiceMessage.PURCHASE_MESSAGE);
    });
  }

  printLottoNumbers() {
    const myLotto = new MyLotto();
    let lottoList = [];
    for (let i = this.amount / 1000; i > 0; i -= 1) {
      lottoList.push(myLotto.generateRandom());
      Console.print(lottoList[lottoList.length - 1]);
    }
    this.lottoList = lottoList;
  }
}

module.exports = Service;
