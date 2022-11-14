const { Console } = require("@woowacourse/mission-utils");

const GET_COST_SENTENCE = '구입금액을 입력해 주세요.';
const ALERT_COUNT_SENTENCE = '개를 구매했습니다.'

class Machine {
  constructor() {
    this.count;
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
}

module.exports = Machine;