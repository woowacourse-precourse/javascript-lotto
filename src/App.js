const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.readLine('구입금액을 입력해주세요.', (num) => {
      if (isDivisibleBy1000(num)) {
        Console.print('올바른 금액입니다.');
      } else {
        Console.print('올바르지 않은 금액입니다.');
      }
    });
  }
}

const isDivisibleBy1000 = (num) => {
  if (num % 1000 === 0) {
    return true;
  }
  return false;
};

module.exports = App;
