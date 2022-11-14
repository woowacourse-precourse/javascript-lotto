const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const InssusedLotto = require("./IssusedLotto.js")
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");

class Manager {
  numbers;
  lottos;
  bonus;
  inssusedLottos;

  constructor() {
  }

  start(){
    this.enterQuantity();
  }

  enterQuantity(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      Validation.isDividedByThousand(input);
      const quantity = input / 1000;
      this.printQuantity(quantity);

      const inssusedLotto = new InssusedLotto(quantity);
      inssusedLotto.makeLotto();
      this.inssusedLottos = inssusedLotto.getInssusedLottos();

      this.enterNumbers();
    });
  }

  printQuantity(quantity){
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }

  enterNumbers(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      const numbers = input.split(',').map(number => parseInt(number));

      const lotto = new Lotto(numbers);
      this.numbers = lotto.getNumbers();

      this.enterBonus();
    });
  }

  enterBonus(){
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      const bonus = new Bonus(this.numbers, input);
      this.bonus = bonus.getBonus();
    })
  }

}

module.exports = Manager;