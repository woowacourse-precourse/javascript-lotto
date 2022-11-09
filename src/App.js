const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_NUMBER_INPUT_MESSAGE = "당첨 번호를 입력해 주세요.";

class App {
  $Lotto;
  $LottoBonus;
  $Budget;

  constructor() {}

  lottoNumberInputCb = (input) => {
    const numbers = input.split(",");
    this.validateIsNotNumber(numbers);
    this.$Lotto = new Lotto(numbers);
    Console.close();
  };

  validateIsNotNumber(...numbers) {
    if (numbers.some((number) => !/[0-9]/.test(number))) {
      Console.close();
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  }

  getLottoNumber = () => {
    Console.readLine(LOTTO_NUMBER_INPUT_MESSAGE, this.lottoNumberInputCb);
  };
  play() {}
}

module.exports = App;
