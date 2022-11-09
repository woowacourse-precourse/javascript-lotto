const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    getPurchaseAmount();
  }
}

const getPurchaseAmount = () => {
  Console.readLine('구입금액을 입력해주세요.', (num) => {
    if (isDivisibleBy1000(num)) {
      Console.print('올바른 금액입니다.');
    } else {
      errorMessage();
    }
  });
};

const isDivisibleBy1000 = (num) => {
  if (num % 1000 === 0) {
    return true;
  }
  return false;
};

const errorMessage = () => {
  throw new Error('[ERROR] 임시 에러메세지');
};

module.exports = App;
