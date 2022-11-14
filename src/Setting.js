class Setting {
  constructor() {
    this.lottoBox = [];
    this.money;
    this.reword = 0;
    this.revenue;
    this.winNumber;
    this.bonusNumber;
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
