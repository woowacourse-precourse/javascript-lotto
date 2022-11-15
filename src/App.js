const MissionUtils =require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");



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
    this.getLottoNum();
  }

  getLottoNum() {
    MissionUtils.Console.readLine('\n'+'당첨 번호를 입력해주세요.\n', this.saveLottoNum.bind(this));

  }

  saveLottoNum(input) {
    const lottoNumFromUser = input;
    const lottoNumFromUserJoin = lottoNumFromUser.split(',').join("");
    
  }

  check() {
 
  }

}




const app = new App();
app.play();




module.exports = App;
