const { Console } = require('@woowacourse/mission-utils');

class View {
  static print(model) {
    model.setResultData();
    Console.print(model.data.message);
    Console.print(model.data.result);
  }
}

module.exports = View;
