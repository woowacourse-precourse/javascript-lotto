const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const ServiceMessage = require('./Constants/ServiceMessages');
const MyLotto = require('./MyLotto');

class Service {
  printLottoCount() {
    Console.readLine(ServiceMessage.PURCHASE_INPUT, (answer) => {
      new Purchase(answer);
      Console.print(answer / 1000 + ServiceMessage.PURCHASE_MESSAGE);
    });
  }

  printLottoNumbers() {
    const myLotto = new MyLotto();
    let lottoList = [];
    for (let i = this.answer / 1000; i > 0; i -= 1) {
      lottoList.push(myLotto.generateRandom());
      Console.print(lottoList[lottoList.length - 1]);
    }
    this.lottoList = lottoList;
  }
}

module.exports = Service;
