const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){ //변수선언
    this.lottoMoney; //로또 구입금액
    this.lottoAmount; //로또 구입수량
    this.winArr = []; //당첨번호(배열에 넣음)
    this.BonusNum; //보너스번호
    this.lottoRandomNum = []; //로또 랜덤번호(구입한 로또들)
    this.fifth = 0; //5등
    this.fourth = 0; //4등
    this.third = 0; //3등
    this.second = 0; //2등
    this.first = 0; //1등
  }

  play() { //게임시작
    this.getMoney();
    this.getLottoAmount();
  }

  getMoney(){ //구매금액 입력받기
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
        this.lottoMoney = money;
    });
  }

  getLottoAmount(){ //로또수량 계산하기 
    this.lottoAmount = parseInt(this.lottoMoney/1000);
    MissionUtils.Console.print(this.lottoAmount + '개를 구매했습니다.');
  }

  getWinNumber(){ //당첨번호 입력받기
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (number) => {
      const winStr = number.toString(); //숫자->문자열
      this.winArr = winStr.split(","); //문자열->배열
    });
  }

  getBonusNumber(){ //보너스번호 입력받기
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
      this.BonusNum = number;
    });
  }

  getRandomNumber(){ //로또 랜덤번호 뽑기
    for(let i = 0; i < this.lottoAmount; i++){
      this.lottoRandomNum[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
  }

  sortRandomNumber(){ //로또 랜덤번호 오름차순 정렬하기
    for(let i = 0; i < this.lottoRandomNum.length; i++){
      this.lottoRandomNum[i].sort(function(a, b){
        return a-b;
      });
    }
    MissionUtils.Console.print(this.lottoRandomNum);
  }

  getWinResult(){ //당첨내역 계산하기
    for(let i = 0; i < this.lottoRandomNum; i++){
      let count = 0;
      for(let j = 0; j < this.lottoRandomNum; j++){
        if(this.lottoRandomNum[i].includes(winArr[j])){
          count++;
        }
      }
      if(count == 3){
        this.fifth++;
      }else if(count == 4){
        this.fourth++;
      }else if(count == 5){
        if(this.lottoRandomNum[i].includes(this.BonusNum)){
          this.second++;
        }else{
          this.third++;
        }
      }else if(count == 6){
        this.first++;
      }
    }
  }

}

module.exports = App;
