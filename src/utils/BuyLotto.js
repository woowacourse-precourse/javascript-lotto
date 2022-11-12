const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/constant");

class CreateNumber {
  constructor(inputValue) {
    this.inputValue = this.inputValue;
  }
  howMuch() {
    Console.readLine(MESSAGE.BUYING_AMOUNT, (inputValue) => {
      this.inputValue = inputValue;
      if (this.inputValue % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력이 되어야합니다.");
      }
    });
  }

  // making() {
  //   const makeNumbers = [];
  //   const number = Random.pickUniqueNumbersInRange(1, 45, 6);
  //   makeNumbers.push(number);
  //   console.log(makeNumbers);
  //   return makeNumbers;
  // }
}

module.exports = CreateNumber;
