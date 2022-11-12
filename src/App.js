const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  LENGTH_OF_LOTTO_NUMBER = 6;

  play() {
    this.readLine("구입금액을 입력해주세요.", this.runLotto.bind(this));
  }

  readLine(message, callback) {
    Console.readLine(message, callback);
  }

  print(message) {
    Console.print(message);
  }

  runLotto(value) {
    const numberOfLotto = this.makePayment(value);
    const lottos = this.issueLotto(numberOfLotto);
    this.getWinner(lottos);
  }

  getWinner(lottos) {
    this.readLine("당첨번호를 입력해주세요.", this.getWinnerNumber.bind(this));
  }

  getWinnerNumber(value) {
    const winnerNumber = value.split(",");
    this.readLine(
      "보너스 번호를 입력해주세요.",
      this.getBonusNumber.bind(this)
    );
  }

  getBonusNumber(value) {
    const bonusNumber = value;
  }

  makePayment(value) {
    const money = value;

    if (money % 1000 !== 0) {
      this.print("1000원 단위로 입력해주세요.");
      this.makePayment();
      return;
    }

    const numberOfLotto = money / 1000;

    this.print(`${numberOfLotto}개를 구매했습니다.`);

    return numberOfLotto;
  }

  issueLotto(numberOfLotto) {
    const lottos = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoNumbers = this.generateLottoNumber();

      lottos.push(new Lotto(lottoNumbers));
    }

    this.printLottos(lottos);

    return lottos;
  }

  generateLottoNumber() {
    const numbers = Random.pickUniqueNumbersInRange(
      1,
      45,
      this.LENGTH_OF_LOTTO_NUMBER
    );

    return numbers.sort();
  }

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      lottos[i].printNumbers();
    }
  }
}

new App().play();
module.exports = App;
