const IssueLotto = require('./components/IssueLotto');
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {}

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const purchase = Number(input);
      const [lottos, count] = IssueLotto.setLotteryNumber(purchase);
      Console.print(`${count}개를 구매했습니다.`);
      lottos.forEach((lotto) => {
        Console.print(lotto.getNumbers());
      });
      this.typedWinNumber({ lottos, purchase });
    });
  }

  typedWinNumber({ lottos, purchase }) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      const wins = input.split(',').map((number) => Number(number));
      this.typedBonusNumber({ lottos, wins, purchase });
    });
  }

  typedBonusNumber({ lottos, wins, purchase }) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      const bonus = Number(input);
    });
  }
}

module.exports = App;
