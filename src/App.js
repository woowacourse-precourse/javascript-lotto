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

  inputWinningNum(){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', async(winning_num) => {
      console.log(winning_num);
    });
  }

  inputMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', async(money) => {
      if(await this.checkInput(money)){
        const lotto_cnt = Math.floor(money/1000);
        this.print_lotto_cnt(lotto_cnt);
        this.draw_lotto(lotto_cnt);
        this.inputWinningNum();
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
