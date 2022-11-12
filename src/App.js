const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  play() {
    Console.readLine('구입금액을 입력해주세요.', (num) => {
      if (isDivisibleBy1000(num)) {
        Console.print(`${num / 1000}개를 구매했습니다.`);
        new Purchase(num).getHowManyLottos();
      } else {
        errorMessage();
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

const errorMessage = () => {
  throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.');
};
const app = new App();
app.play();

module.exports = App;
