const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Buyer = require("../src/Buyer");
const Lotto = require("../src/Lotto");

class App {
  #Buyer;
  #Lotto;
  #bonus;

  play() {
    this.enterAmount();
  }

  enterAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#Buyer = new Buyer(money);
      this.showPurchaseLottos();

      this.enterLottoNumbers();
    });
  }

  showPurchaseLottos() {
    this.#Buyer.countLotto();
    this.#Buyer.createLottos();
  }

  enterLottoNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      const tempNumbers = this.splitCharacter(numbers);
      this.#Lotto = new Lotto(tempNumbers);

      this.enterBonus();
    });
  }

  splitCharacter(numbers) {
    return numbers.split(',').map(Number);
  }

  enterBonus() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonus) => {
      this.#Lotto.bonusCharacterCheck(bonus);
      this.#Lotto.bonusRangeCheck(bonus);
      this.#Lotto.bonusDuplicateCheck(bonus);
      this.#bonus = bonus;
    });
  }
}
const app = new App; app.play();
module.exports = App;
