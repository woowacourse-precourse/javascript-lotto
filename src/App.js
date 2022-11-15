const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  howMany;
  lotto;
  Result = [0,0,0,0,0];
  MoneyForBuy;
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      console.log(`${answer}`);
      
      if(isNaN(answer)) throw new Error("[ERROR] 금액은 숫자이어야 합니다.");

      this.MoneyForBuy = answer;
      if(answer%1000 == 0){
        this.howMany = answer/1000;
        MissionUtils.Console.print(this.howMany + '개를 구매했습니다.');
        MissionUtils.Console.close();
        this.Get_Number();
      }else{
        throw new Error("[ERROR] 금액은 1000원 단위어야 한다.");
      }
    });
  }

  Get_Number(){
    this.lotto = new Array(this.howMany);
    for(var i = 0; i<this.howMany; i++){
      var Random_Pick = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      Random_Pick.sort(function(a, b) {
        if(a>b)return 1;
        else if(a == b)return 0;
        else if(a < b)return -1;
      });
      this.lotto[i] = new Lotto(Random_Pick);
      MissionUtils.Console.print(this.lotto[i].get_numbers());
      MissionUtils.Console.close();
    }

    this.Get_Answer();
  }

  Get_Count( answers, bonus){
    var Match_point;
    for(var i = 0; i<this.howMany; i++){
      Match_point = this.lotto[i].Compare(answers.get_numbers());
      this.Result = this.lotto[i].Check_Lotto(Match_point, bonus, answers.get_numbers(), this.Result);
    }
    this.Lets_Print();
  }

  Lets_Print(){
    MissionUtils.Console.print('당첨 통계\n---\n')
    MissionUtils.Console.print("3개 일치 (5,000원) - " + this.Result[0] + "개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + this.Result[1] + "개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + this.Result[2] + "개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.Result[3] + "개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + this.Result[4] + "개");
    this.Calculate();
  }

  Calculate(){
    var howMuch = 0;
    howMuch = this.Result[0] * 5000 + this.Result[1] * 50000 + this.Result[2] * 1500000 + this.Result[3] * 30000000 + this.Result[4] * 2000000000;
    howMuch = howMuch/this.MoneyForBuy;
    MissionUtils.Console.print("총 수익률은 "+ Math.round(howMuch * 1000) / 10 + "%입니다.\n---");
    return 0;
  }

  Get_Bonus(lotto_answer){
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.', (answers) => {
      console.log(`${answers}`);
      this.Get_Count(lotto_answer, answers);
    });
  }

  Get_Answer(){
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.', (answers) => {
      console.log(`${answers}`);
      const answer = answers.split(',');
      const lotto_answer = new Lotto(answer);
      this.Get_Bonus(lotto_answer);
    });
  }
}
module.exports = App;