const { Console } = require("@woowacourse/mission-utils");
const Price = require('./Price');

class UserInputs {
  constructor() {
    this.price = 0;
  }

  getPrice() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      new Price(answer)
      this.price = answer
      // Console.print('123123123132')
      // this.getAnswerNumber()
    });
  };

  // getAnswerNumber() {
  //   Console.readLine('여기여기.\n', (answer) => {
  //     new Price(answer)
  //     this.price = answer
  //     // Console.print('000000000000000000')
  //   });
  // };

}

module.exports = UserInputs;
