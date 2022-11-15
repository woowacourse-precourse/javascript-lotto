const MissionUtils = require("@woowacourse/mission-utils");
class App {

  constructor(){
    this.UsersLotto = [];
    this.WinningLotto = [];
    this.bonusNumber = 0;
  }

  play() {
    this.InputMoney();
  }

  InputMoney(){
    MissionUtils.Console.readLine('구입 금액을 입력해주세요 : ', (money) => {
      this.money = parseInt(money);
      let amount = money/1000;
    });
  }
}

// let app = new App();
// app.play();

module.exports = App;