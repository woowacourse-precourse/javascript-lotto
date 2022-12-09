const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const CreatedLotto = require("./CreatedLotto.js")
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");
const Message = require("./Message.js");

class Manager {
  quantity;
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
      this.quantity = input / 1000;
      this.printQuantity();
      this.printCreatedLotto();
    });
  }

  printQuantity(){
    MissionUtils.Console.print(`${this.quantity}개를 구매했습니다.`);
  }

  printCreatedLotto(){
    let lottoToString = "";
    const createLotto = new CreatedLotto(this.quantity);
    this.createdLottoList = createLotto.getCreatedLottoList();
    this.createdLottoList.map(lottos =>  {
      lottoToString = "[";
      lottos.map((item, index) => index !== (lottos.length-1)? lottoToString+=`${item}, ` : lottoToString+=`${item}`);
      lottoToString += "]";
      MissionUtils.Console.print(lottoToString);
    })
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

      this.printResult();
    });
  }

  printResult(){
    const message = new Message(this.quantity, this.createdLottoList, this.numbers, this.bonus);
    const result = message.getMessage();
    MissionUtils.Console.print(result);
    MissionUtils.Console.close();
  }
}

module.exports = Manager;