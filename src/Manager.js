const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const CreatedLotto = require("./CreatedLotto.js")
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");

class Manager {
  numbers;
  bonus;
  createdLottoList;

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
      this.printCreatedLotto(quantity);
    });
  }

  printQuantity(quantity){
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }

  printCreatedLotto(quantity){
    const createLotto = new CreatedLotto(quantity);
    this.createdLottoList = createLotto.getCreatedLottoList();
    this.createdLottoList.map(lottos => MissionUtils.Console.print(lottos));
    
    this.enterNumbers();
  };

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
    });
  }
}

module.exports = Manager;