const Console = require("./Console");
const { THREE, FOUR, FIVE, FIVE_AND_BONUS, SIX } = require("./constants");

class App {
  constructor() {
    this.lottos = [];
    this.winNumbers = [];
    this.bonusNumber = null;
    this.winStatics = {
      [THREE]: 0,
      [FOUR]: 0,
      [FIVE]: 0,
      [FIVE_AND_BONUS]: 0,
      [SIX]: 0,
    }
  }
  play() {

  }
}

module.exports = App;
