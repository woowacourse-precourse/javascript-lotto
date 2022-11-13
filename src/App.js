const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){ //변수선언
    this.lottoMoney; //로또 구입금액
    this.lottoAmount; //로또 구입수량
  }

  play() { //게임시작
    this.getMoney();
    this.getLottoAmount();
  }

  getMoney(){ //구매금액 입력받기
    MissionUtils.Console.readline('구입금액을 입력해 주세요.\n', (money) => {
        this.lottoMoney = money;
    });
  }

  getLottoAmount(){ //로또수량 계산하기 
    this.lottoAmount = parseInt(this.lottoMoney/1000);
    MissionUtils.Console.print(this.lottoAmount + '개를 구매했습니다.\n');
  }
}

module.exports = App;
