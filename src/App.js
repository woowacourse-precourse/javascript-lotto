const MissionUtils =require("@woowacourse/mission-utils");



class App {
  play() {
    this.getMoney()
    
    
  }
  getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요\n', this.saveMoney.bind(this));
  }
  saveMoney(input) {
    const money = input;
    MissionUtils.Console.print('\n'+ money/1000 + ' 개를 구매했습니다.')
  }

}

const app = new App();
app.play();

module.exports = App;
