const IssueLottery = require('./components/IssueLottery');
const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {}
  play() {}

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const [lottos, count] = IssueLottery.setLotteryNumber(input);
      Console.print(`${count}개를 구매했습니다.`);
      lottos.forEach((lotto) => {
        Console.print(lotto.getNumbers());
      });
      this.typedWinNumber();
    });
  }

  typedWinNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      const winNumbers = input.split(',').map((number) => Number(number));
      this.typedBonusNumber();
    });
  }

  typedBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      const bonusNumber = Number(input);
    });
  }
}

module.exports = App;
