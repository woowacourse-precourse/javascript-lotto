const { Console, Random } = require("@woowacourse/mission-utils");

const GET_COST_SENTENCE = '구입금액을 입력해 주세요.';
const ALERT_COUNT_SENTENCE = '개를 구매했습니다.'

class Machine {
  constructor() {
    this.count;
    this.lottos = [];
  }

  getCost() {
    Console.print(GET_COST_SENTENCE);
  }

  calculateCount(cost) {
    if (cost % 1000 !== 0) {
      // 에러 처리
    } 

    this.count = parseInt(cost / 1000);
    Console.print(`\n${this.count}${ALERT_COUNT_SENTENCE}`);
  }

  issueLottos() {
    for (let i = 0; i < this.count; i++) {
      const lotto = (Random
        .pickUniqueNumbersInRange(1, 45, 6))
        .sort((a, b) => a - b);

      this.lottos.push(lotto);
    }

    this.showLottos();
    
    return this.lottos;
  }

  showLottos() {
    let stringLottos = '';

    for (let i = 0; i < this.lottos.length; i++) {
      stringLottos += `[${this.lottos[i].join(', ')}]\n`
    }

    Console.print(stringLottos);
  }
}

module.exports = Machine;