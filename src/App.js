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
    const winningInput = this.draw.winning();
    new Lotto(winningInput, issueList);
  }
}

module.exports = App;