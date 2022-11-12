const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  // userLottos;

  play() {
    this.makePayment();
    console.log(this.userLottos);
  }

  readLine(message, callback) {
    Console.readLine(message, callback);
  }

  print(message) {
    Console.print(message);
  }

  makePayment() {
    this.readLine("구입금액을 입력해주세요.", (value) => {
      const money = value;

      if (money % 1000 !== 0) {
        this.print("1000원 단위로 입력해주세요.");
        this.makePayment();
        return;
      }

      const numberOfLotto = money / 1000;

      this.print(`${numberOfLotto}개를 구매했습니다.`);
      this.issueLotto(numberOfLotto);
    });
  }

  issueLotto(numberOfLotto) {
    const lottos = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoNumbers = this.generateLottoNumber();
      lottos.push(new Lotto(lottoNumbers));
    }
  }

  generateLottoNumber() {
    const count = 6;
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Random.pickUniqueNumbersInRange(1, 45, count));
    }

    return numbers.sort();
  }
}

new App().play();
module.exports = App;
