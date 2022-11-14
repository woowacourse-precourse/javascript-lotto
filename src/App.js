const MissionUtils =require("@woowacourse/mission-utils");



class App {
  play() {
    this.getMoney();
    
  }

  getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요\n', this.saveMoney.bind(this));
  }
  saveMoney(input) {
    const money = input;
    const lottoNum = money/1000;
    MissionUtils.Console.print('\n'+ lottoNum + ' 개를 구매했습니다.');
    this.MakeLottoNum(lottoNum);
  }

  MakeLottoNum(lottoNum) {
    var lottoList=[];
    for(var i=0; i<lottoNum; i++){
      lottoList.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    for(var i=0; i<lottoNum; i++){
      MissionUtils.Console.print(lottoList[i]);
    }
    
  }

  check() {
 
  }

}

const app = new App();
app.play();

module.exports = App;
