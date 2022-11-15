class App {
  inputValue = {
    winningNumbers : [],
    bonusNumber : 0,
    purchaseAmount : 0
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
      this.inputValue[purchaseAmount] = money;
    });
  }

  inputWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      this.inputValue[winningNumbers] = numbers.split(',');
    });
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
      this.inputValue[bonusNumber] = number;
    });
  }

  calculateWinningAmount() {
    return 5000*this.winningCount["3"] + 50000*this.winningCount["4"] + 1500000*this.winningCount["5"] + 30000000*this.winningCount["5+"] + 2000000000*this.winningCount["6"];
  }

  calculateYield(money) {
    return Number((this.calculateWinningAmount/money*100).toFixed(1));
  }

  play() {}


}

module.exports = App;
