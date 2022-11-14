const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor(text) {
    this.text = text;
  }

  play() {
    Console.readLine(this.text, (cost) => {
      let quantity = cost / 1000;
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
        computer = [];
        quantity -= 1;
      }
      Console.readLine(`${'\n'}당첨 번호를 입력해 주세요.${'\n'}`, (number) =>
        Console.readLine(
          `${'\n'}보너스 번호를 입력해 주세요.${'\n'}`,
          (bonus) => {
            Console.print(`number: ${number} bonus: ${bonus}`);
            Console.close();
          }
        )
      );
    });
  }
}

const test = new App(`구입금액을 입력해 주세요.${'\n'}`);
test.play();

module.exports = App;
