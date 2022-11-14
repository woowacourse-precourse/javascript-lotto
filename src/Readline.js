const { Console } = require('@woowacourse/mission-utils');

class Readline {
  constructor(text) {
    this.text = text;
  }

  get te() {
    return this.readline();
  }

  readline() {
    Console.readLine(this.text, (answer) => {
      return answer;
    });
  }
}

const test = new Readline('구입금액을 입력해 주세요.');
console.log(test.te());
