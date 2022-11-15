const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.money = null; // 금액 입력 숫자
    this.lotto = []; // 로또 배열로 받기
    this.winNum = []; //당첨숫자 배열로 받기
    this.bonusNum = null; //보너스 번호 숫자
  }
  setMoney() {
    Console.readline("구입금액을 입력해 주세요.\n",(num) => {
      const money = parseInt(num);
    })
  }

  play() {
  }
}

module.exports = App;