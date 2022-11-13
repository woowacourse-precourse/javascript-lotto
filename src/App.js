const { Console } = require("@woowacourse/mission-utils");
const Budget = require('./Budget')

class App {
  constructor() {
    this.play()
  }

  play() {
    Console.readLine('', (answer) => {
      const gameBudget = new Budget(answer);
      console.log(gameBudget.budget)
    })

  }
}

module.exports = App;
test = new App();