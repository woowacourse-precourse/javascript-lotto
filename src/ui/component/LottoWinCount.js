const { Console } = require('@woowacourse/mission-utils');

const Component = require('../core/Component');

class LottoWinCountUI extends Component {
  #LOTTOSTATIC = '\n당첨 통계';

  #SLASH = '---';

  constructor({ winScore }) {
    super();

    this.state = {
      winScore,
    };
  }

  #template() {
    const { winScore } = this.state;

    return [
      `3개 일치 (5,000원) - ${winScore.fifth}개`,
      `4개 일치 (50,000원) - ${winScore.fourth}개`,
      `5개 일치 (1,500,000원) - ${winScore.third}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winScore.second}개`,
      `6개 일치 (2,000,000,000원) - ${winScore.first}개`,
    ];
  }

  print() {
    Console.print(this.#LOTTOSTATIC);
    Console.print(this.#SLASH);
    this.#template().forEach(setence => Console.print(setence));
  }
}

module.exports = LottoWinCountUI;
