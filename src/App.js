const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.lottos = [];
    this.answer = [];
    this.item = 0;
    this.count = 0;
    this.bonusNum;
    this.match = [
      { collect: 3, reward: "5000" },
      { collect: 4, reward: "50,000" },
      { collect: 5, reward: "1,500,000" },
      { collect: 5, reward: "30,000,000", Bonus: true },
      { collect: 6, reward: "2,000,000,000" },
    ];
  }

  play() {}
}

module.exports = App;
