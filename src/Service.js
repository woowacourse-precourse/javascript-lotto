const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const ServiceMessage = require('./Constants/ServiceMessages');

class Service {
  printLottoCount() {
    Console.readLine(ServiceMessage.PURCHASE_INPUT, (answer) => {
      new Purchase(answer);
      Console.print(answer / 1000 + ServiceMessage.PURCHASE_MESSAGE);
    });
  }
}

module.exports = Service;
