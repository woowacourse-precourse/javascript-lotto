const Lotto = require('./Lotto');
const Issue = require('./Issue');
const Draw = require('./Draw');

class App {
  constructor() {
    this.issue = new Issue();
    this.draw = new Draw();
  }

  play() {
    const issueList = this.issue.purchase();
    const totalNumbers = this.draw.winning();
    new Lotto(totalNumbers, issueList);
  }
}

module.exports = App;