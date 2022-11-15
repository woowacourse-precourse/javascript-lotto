const { Console, Random } = require('@woowacourse/mission-utils');
const { PROCESS_MESSAGE } = require('./constants/Message');
const Validation = require('./Validation');

class Issue {
  purchase() {
    Console.readLine(PROCESS_MESSAGE.INPUT_PURCHASE_AMOUNT, (inputValue) => {
      new Validation().purchaseInputValue(inputValue);
      this.purchaseCount = Math.floor(Number(inputValue) / 1000);
      Console.close();
      this.list();
    });
    return this.issueList;
  }

  list() {
    const issueSet = new Set();
    while (issueSet.size < this.purchaseCount) {
      issueSet.add(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.issueList = issueSet;
    this.print();
  }

  print() {
    Console.print(`${this.issueList.size}개를 구매했습니다.`);
    this.issueList.forEach((issueItem) => {
      Console.print("[" + issueItem.join(', ') + "]");
    });
  }
}

module.exports = Issue;