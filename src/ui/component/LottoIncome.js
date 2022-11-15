const { Console } = require('@woowacourse/mission-utils');

const Component = require('../core/Component');

class LottoIncomeUI extends Component {
  constructor({ income }) {
    super();

    this.state = {
      income,
    };
  }

  #template() {
    const { income } = this.state;

    return `총 수익률은 ${income}%입니다.`;
  }

  print() {
    Console.print(this.#template());
  }
}

module.exports = LottoIncomeUI;
