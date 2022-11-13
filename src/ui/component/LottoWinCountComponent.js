const { Console } = require('@woowacourse/mission-utils');

const Component = require('../core/Component');

class LottoWinCountComponet extends Component {
  constructor({ winScore }) {
    super();

    this.state = {
      winScore,
    };

    this.print();
  }

  #template() {
    const { winScore } = this.state;

    return [
      `3개 일치 (5,000원) - ${winScore[0]}개`,
      `4개 일치 (50,000원) - ${winScore[1]}개`,
      `5개 일치 (1,500,000원) - ${winScore[2]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winScore[3]}개`,
      `6개 일치 (2,000,000,000원) - ${winScore[4]}개`,
    ];
  }

  print() {
    Console.print('당첨 통계');
    Console.print('---');
    this.#template().forEach(setence => Console.print(setence));
  }
}

module.exports = LottoWinCountComponet;
