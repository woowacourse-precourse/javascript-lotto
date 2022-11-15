const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  lotto = new Lotto();

  constructor(text) {
    this.text = text;
  }

  play() {
    this.lotto.getPurchaseAmount();
    /* Console.readLine(this.text, (cost) => {
      let quantity = cost / 1000;
      const result = [];
      Console.print(`${'\n'}${quantity}개를 구매했습니다.`);
      let computer = [];
      while (quantity >= 1) {
        while (computer.length < 6) {
          const number = Random.pickNumberInRange(1, 45);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        Console.print(computer.sort((a, b) => a - b));
        result.push(computer.sort((a, b) => a - b));
        computer = [];
        quantity -= 1;
      }
      Console.readLine(`${'\n'}당첨 번호를 입력해 주세요.${'\n'}`, (number) => {
        const userNumbers = [];
        const userBonus = [];
        userNumbers.push(...number.split(','));
        const numUser = userNumbers.map(Number);
        Console.readLine(
          `${'\n'}보너스 번호를 입력해 주세요.${'\n'}`,
          (bonus) => {
            userBonus.push(Number(bonus));
            Console.print(`${'\n'}당첨 통계`);
            Console.print(`---`);
            result.forEach((num) => {
              num.forEach((el) => {
                for (let i = 0; i < numUser.length; i += 1) {
                  if (el === numUser[i]) {
                    Console.print(el);
                  }
                }
                if (el === userBonus[0]) {
                  Console.print(el);
                }
              });
            });
          }
        );
      });
    }); */
  }
}

const test = new App();
test.play();

module.exports = App;
