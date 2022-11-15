const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const CreatedLotto = require("./CreatedLotto.js")
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");

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
      lottoToString = "["
      lottos.map((item, index) => index !== (lottos.length-1)? lottoToString+=`${item}, ` : lottoToString+=`${item}`);
      lottoToString += "]"
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

  makeWinInfo(){
    const winCount = this.createdLottoList.map(lotto => lotto.filter(number => this.numbers.includes(number)).length);
    const hasBonus = this.createdLottoList.map(lotto => lotto.filter(number => number === parseInt(this.bonus)).length)[0];

    let winInfo = Array.from({length: 5}, () => 0)

    for (let i = 0; i < winCount.length; i++) {
      if (winCount[i] === 3) winInfo[0] += 1;

      if (winCount[i] === 4) winInfo[1] += 1;

      if (winCount[i] === 5) { 
        winInfo[2] += 1;
        if (hasBonus === 1) winInfo[3] += 1; 
      }

      if (winCount[i] === 6) winInfo[4] += 1;
    }
    return winInfo;
  }

  calRateOfReturn(sum){
    return ((100 / this.quantity) * (sum / 1000)).toFixed(1); 
  }

  makeMessage(){
    const winInfo = this.makeWinInfo();
    const MONEY_UNITS = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
    let message = "당첨 통계 \n---\n";
    let sum = 0;
    for (let i = 0; i<5; i++){
      message += (i > 2) ? `${i+2}개 일치` : `${i+3}개 일치`;
      message += (i === 3) ? `, 보너스 볼 일치` : "";
      message += ` (${MONEY_UNITS[i]}원) - ${winInfo[i]}개\n`;
      sum += parseInt(MONEY_UNITS[i].replace(/,/g, "")) * winInfo[i];
    }
    message += `총 수익률은 ${this.calRateOfReturn(sum)}%입니다.`;
    return message;
  }

  printResult(){
    const message = this.makeMessage();
    MissionUtils.Console.print(message);
    MissionUtils.Console.close();
  }
}

module.exports = Manager;