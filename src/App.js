const MissionUtils = require("@woowacourse/mission-utils");
const FIFTH_PRIZE = 5000;
const FOURTH_PRIZE = 50000;
const THIRD_PRIZE = 1500000;
const SECOND_PRIZE = 30000000;
const FIRST_PRIZE = 2000000000;

class App {
  constructor(){ //변수선언
    this.lottoMoney; //로또 구입금액
    this.lottoAmount; //로또 구입수량
    this.winArr = []; //당첨번호(배열에 넣음)
    this.BonusNum; //보너스번호
    this.lottoRandomNum = []; //로또 랜덤번호(구입한 로또들)
    this.count = 0; 
    this.fifth = 0; //5등
    this.fourth = 0; //4등
    this.third = 0; //3등
    this.second = 0; //2등
    this.first = 0; //1등
    this.RateOfReturn; //수익률(총 상금)
  }

  play() { //게임시작
    this.getMoney();
    this.getWinNumber();
    this.getBonusNumber();
    this.getRandomNumber();
    this.getWinResult();
    this.getRateOfReturn();
  }

  getMoney(){ //구매금액 입력받기
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.ExceptionOfGetMoney(money);
      this.lottoMoney = money;
    });
    this.getLottoAmount();
  }

  ExceptionOfGetMoney(money){ //구매금액 입력받기 예외처리
    if(money % 1000 != 0){
      throw new Error("[ERROR] 구매금액은 1000원 단위여야 합니다.");
    }
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
    this.sortRandomNumber();
  }

  ExceptionOfGetRandomNumber(){ //로또 랜덤번호 뽑기 예외처리
    lottoRandomNum.forEach(game => {
      if(game.length != 6){
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }else if(game[0] < 1 || game[5] > 45){
        throw new Error("[ERROR] 로또 번호는 1과 45사이의 수여야 합니다.");
      }else if((new Set(game)).size != 6){
        throw new Error("[ERROR] 중복된 숫자가 있습니다.");
      }
    });
  }

  sortRandomNumber(){ //로또 랜덤번호 오름차순 정렬하기
    for(let i = 0; i < this.lottoRandomNum.length; i++){
      let RandomStr = this.lottoRandomNum[i].join(', ');  
      this.lottoRandomNum[i].sort(function(a, b){
        return a-b;
      });
      MissionUtils.Console.print('[' + RandomStr + ']');
    }
  }

  getWinResult(){ //당첨내역 계산하기
    for(let i = 0; i < this.lottoRandomNum.length; i++){
      this.count = 0;
      this.getResultOfIncludeWinArr(i);
      this.getPriceResult(this.count);
    }
    this.printWinResult();
  }

  getResultOfIncludeWinArr(i){ //당첨번호 포함여부 계산하기
    for(let j = 0; j < this.lottoRandomNum[i].length; j++){
      if(this.lottoRandomNum[i].includes(parseInt(this.winArr[j]))){
        this.count++;
      }
    }
  }

  getPriceResult(count){ //등수 계산하기
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

  printWinResult(){ //당첨내역 출력하기
    MissionUtils.Console.print('당첨 통계\n---');
    MissionUtils.Console.print(
      '3개 일치 (5,000원) - ' + this.fifth + '개\n' +
      '4개 일치 (50,000원) - ' + this.fourth + '개\n' +
      '5개 일치 (1,500,000원) - ' + this.third + '개\n' +
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + this.second + '개\n' +
      '6개 일치 (2,000,000,000원) - ' + this.first + '개'
    )
  }

  getRateOfReturn(){ //수익률 계산하기
    this.RateOfReturn = (this.fifth*FIFTH_PRIZE + this.fourth*FOURTH_PRIZE + this.third*THIRD_PRIZE + this.second*SECOND_PRIZE + this.first*FIRST_PRIZE) / this.lottoMoney * 100; //수익률
    this.roundOffRateOfReturn();
  }

  roundOffRateOfReturn(){ //수익률 반올림하기
    MissionUtils.Console.print('총 수익률은 ' + this.RateOfReturn.toFixed(1) + '%입니다.');
  }
}

module.exports = App;
