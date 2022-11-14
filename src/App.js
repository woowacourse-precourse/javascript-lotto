const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  checkInput(money){
    if(isNaN(money)){
      throw "[ERROR] 구입금액은 숫자로만 이루어져야 합니다."
    }
    return 1;
  }

  print_lotto_cnt(lotto_cnt){
    MissionUtils.Console.print(`${lotto_cnt}개를 구매했습니다.`);
  }

  draw_lotto(lotto_cnt){
    for(let i=0; i<lotto_cnt; i++){
      let drawed = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(drawed);
    } 
  }

  inputWinningNum(winning_arr){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (winning_str) => {
      const winning_num = [ ...winning_str.split(',')];
      for(let i=0; i<winning_num.length; i++){
        winning_arr.push(parseInt(winning_num[i]));
      }
    });
  }

  inputBonusNum(winning_arr){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonus_num) => {
      winning_arr.push(parseInt(bonus_num));
    });
  }

  inputMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', async(money) => {
      if(await this.checkInput(money)){
        const lotto_cnt = Math.floor(money/1000);
        const lotto_arr = [];
        const winning_arr = [];

        this.print_lotto_cnt(lotto_cnt);
        this.draw_lotto(lotto_cnt);
        this.inputWinningNum(winning_arr);
        this.inputBonusNum(winning_arr);
        console.log(winning_arr);
      }
      await MissionUtils.Console.close();

    });
  }
  
  play() {
    this.inputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
