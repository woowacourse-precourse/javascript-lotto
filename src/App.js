const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto");

class App {

  purchasemoney;
  numberoflotto;
  sixlotterynumbers = [];
  
  play() {
    this.purchaseLotto();
    this.winningNumbers();
  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.purchasemoney = money;
      this.numberoflotto = (money / 1000);
      this.validatePrice();
      this.countingLotto();
      this.printingLotto();
    });
  }

  validatePrice() {
    if (this.purchasemoney % 1000 !== 0) throw new Error("[ERROR] 1000단위의 수를 입력해주세요!");
  }

  countingLotto() {
    Console.print(`${this.numberoflotto}개를 구매했습니다.`);
  }

  printingLotto() {
    for (let count = 1; count <= this.numberoflotto; count++) {
      let lotterynumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=> a-b)
      Console.print(`[${lotterynumber.join(', ')}]`);
      this.sixlotterynumbers.push(lotterynumber);
    }
  }

  winningNumbers() {
    let winningnumbers;
    Console.readLine("당첨 번호를 입력해 주세요", (numbers) => {
      winningnumbers = numbers.split(",").map(Number);
      const lotto = new Lotto(winningnumbers);
      lotto.bonusNumber(this.sixlotterynumbers,this.purchasemoney);
    });
  }

}

module.exports = App;
