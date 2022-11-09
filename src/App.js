const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_NUMBER_INPUT_MESSAGE = "당첨 번호를 입력해 주세요.";

class App {
  $Lotto;
  $LottoBonus;

  constructor() {}

  lottoNumberInputCb = (input) => {
    const numbers = input.split(",");
    this.$Lotto = new Lotto(numbers);
    Console.Print(this.$Lotto.#numbers.join(""));
    Console.close();
  };

  getLottoNumber = () => {
    Console.readLine(LOTTO_NUMBER_INPUT_MESSAGE, this.lottoNumberInputCb);
  };
  play() {
    this.getLottoNumber();
  }
}

module.exports = App;
