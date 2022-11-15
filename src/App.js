const Lotto = require("./Lotto.js");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.pay = 0;
    this.cnt = 0;
    this.games = [];

    this.winningNumbers;
    this.winnings = [5000, 50000, 1500000, 30000000, 2000000000]; // 당첨금액
  }

  play() {
    this.payMoney();
    //this.raffle();
  }

  //--------------------------------------- 당첨 확인


  // -------------------------------------- 당첨번호 입력
  raffle(){
/*
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      var winningsNumbers = Array.from(answer);
      this.winningNumbers = new Lotto(winningsNumbers);
    });
/*
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
      
    });
    */
  }
  

  //--------------------------------------- game 준비
  payMoney(){
    var console = MissionUtils.Console();
    console.log(1);
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.validateMoney(answer);

      MissionUtils.Console.close();
    })

  }

  validateMoney(money){
    // 1000원 단위
    if(money%1000 != 0){
      throw new Error("[ERROR] 1,000원 단위로 입력하세요.");
    }

    this.pay = money;
    this.cnt = Math.floor(money/1000);
    this.buyLotto(this.cnt);
  }

  buyLotto(cnt){
    MissionUtils.Console.print(cnt + "개를 구매했습니다.");

    for(var i = 0 ; i < cnt ; i++){
      var ran = this.pickLottoNumbers();
      
      var lotto = new Lotto(ran);
      this.games.push(lotto);

      MissionUtils.Console.print(lotto.getNumbers());
    }
  }

  pickLottoNumbers(){
    var ran = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
    ran = ran.sort((a,b) => a-b);
    return ran;
  }

  test(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      
      this.pay = answer;

      MissionUtils.Console.close();
    });

    console.log("this.pay : " + this.pay);
  }


}

const app = new App();
app.play();


module.exports = App;
