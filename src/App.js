const Lotto = require("./Lotto");
const { Console } = require("@woowacourse/mission-utils");

class App {
  inputValue = {
    winningNumbers : [],
    bonusNumber : null,
    purchaseAmount : null,
    purchaseLotto : []
  }

  winningCount = {
    "3" : 0,
    "4" : 0,
    "5" : 0,
    "5+" : 0,
    "6" : 0
  }

  inputPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.validateMoney(Number(money))
      this.inputValue[purchaseAmount] = Number(money);
    });
    Console.close();
  }

  validateMoney(money) {
    if (money%1000 !== 0) {
      throw new Error("[ERROR] 구입 금액을 1000원 단위로 입력해주세요.");
    }
  }

  inputWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      changeNumber(numbers.split(','));
    });
    Console.close();
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
      this.inputValue[bonusNumber] = Number(number);
    });
    Console.close();
  }

  changeNumber(numbers) {
    const toNumbers = arr => arr.map(Number);
    this.inputValue[winningNumbers] = toNumbers(numbers);
  }

  calculateWinningAmount() {
    return 5000*this.winningCount["3"] + 50000*this.winningCount["4"] + 1500000*this.winningCount["5"] + 30000000*this.winningCount["5+"] + 2000000000*this.winningCount["6"];
  }

  calculateYield(money) {
    return Number((this.calculateWinningAmount/money*100).toFixed(1));
  }

  printLottoList(frequency) {
    Console.print(frequency + "개를 구매했습니다.");
    Console.close();

    for (let index = 0; index<frequency; index++) {
      Console.print(this.inputValue[purchaseLotto[index]]);
    }
    Console.close();
  }

  printWinningStatistics() {
    //Console.print("당첨 통계");
    //Console.print("---");
    Console.print("3개 일치 (5,000원) - " + this.inputValue[this.winningCount["3"]] + "개");
    Console.print("4개 일치 (50,000원) - " + this.inputValue[this.winningCount["4"]] + "개");
    Console.print("5개 일치 (1,500,000원) - " + this.inputValue[this.winningCount["5"]] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.inputValue[this.winningCount["5+"]] + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + this.inputValue[this.winningCount["6"]] + "개");
    Console.print("총 수익률은 " + this.calculateYield(this.inputValue[purchaseAmount]) + "%입니다.");
    Console.close();
    //Console.print("---");
  }

  checkBonusException() {
    const tempNumbers = this.inputValue[winningNumbers];
    tempNumbers.push(this.inputValue[bonusNumber]);
    return tempNumbers;
  }

  play() {
    this.inputPurchaseAmount();

    const frequency = this.inputValue[purchaseAmount]/1000;
    this.inputValue[purchaseLotto] = rotto.createLotto(frequency);
    this.printLottoList(frequency);

    this.inputWinningNumbers();
    const rotto = new Lotto(this.inputValue[winningNumbers]);
    rotto.validate(this.inputValue[winningNumbers]);
    rotto.deduplication(this.inputValue[winningNumbers]);
    rotto.outerRange(this.inputValue[winningNumbers]);

    this.inputBonusNumber();
    rotto.deduplication(this.checkBonusException());
    rotto.outerRange(this.checkBonusException());

    printWinningStatistics();
  }


}

module.exports = App;
