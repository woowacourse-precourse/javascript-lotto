const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(){ //변수선언
    this.lottoMoney;
  }

  play() { //게임시작

  }

  getMoney(){ //구매금액 입력받기
    MissionUtils.Console.readline('구입금액을 입력해 주세요.\n', (money) => {
        this.lottoMoney = money;
    });
  }

  getLottoAmount(){ //로또수량 계산하기
    
  }
}

module.exports = App;
