const Lotto = require("./Lotto");
const { readLine } = require("./Missionutils");

class App {
  play() {
    this.getWinningNumbersFromUser();
  }
  getWinningNumbersFromUser() {
    readLine("당첨 번호를 입력해 주세요.", (winningNumbers) => {
      this.getBonusWinningNumberFromUser(winningNumbers);
    });
  }
  getBonusWinningNumberFromUser(winningNumber) {
    readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      new Lotto({ winningNumber, bonus: +bonusNumber });
    });
  }
}
const a = new App();
a.play();
module.exports = App;
