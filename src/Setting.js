class Setting {
  constructor() {
    this.lottoBox = [];
    this.money;
    this.reward = 0;
    this.winNumber;
    this.bonusNumber;
    this.check = 0;
    this.score = {
      0: 0,
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    };
  }
}

module.exports = Setting;
