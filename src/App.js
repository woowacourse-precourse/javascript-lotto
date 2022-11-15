class App {
  winningCount = {
    "3" : 0,
    "4" : 0,
    "5" : 0,
    "5+" : 0,
    "6" : 0
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
