const { Console } = require('@woowacourse/mission-utils');

const Component = require('../core/Component');

class LottoPaymentUI extends Component {
  constructor({ count, lottos }) {
    super();

    this.state = {
      count,
      lottos,
    };
  }

  #template() {
    return `\n${this.state.count}개를 구매했습니다.`;
  }

  print() {
    const { lottos } = this.state;

    Console.print(this.#template());
    lottos.forEach(lotto => {
      const result = JSON.stringify(lotto.sort((x, y) => x - y)).replace(
        /,/g,
        ', ',
      );
      Console.print(result);
    });
  }
}

module.exports = LottoPaymentUI;
