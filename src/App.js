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


  draw_lotto(lotto_cnt, lotto_arr){
    for(let i=0; i<lotto_cnt; i++){
      let drawed = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto_arr.push(drawed);
    } 
  }


  inputWinningNum(winning_arr){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (winning_str) => {
      const winning_num = [ ...winning_str.split(',')];
      for(let i=0; i<winning_num.length; i++){
        winning_arr.push(parseInt(winning_num[i]))
      }
    });
  }


  inputBonusNum(bonus_arr){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonus_num) => {
      bonus_arr.push(parseInt(bonus_num));
    });
  }


  findCoincided(winning_arr, x){
    return winning_arr.includes(x)
  }


  resultCompare(winning_arr, bonus_num, lotto_arr){
    const result = [0, 0, 0, 0, 0]; // 각 3개 일치, 4개 일치, 5개 일치, 5개+보너스 일치, 6개 일치
    for(let i=0; i<lotto_arr.length; i++){
      const correct = lotto_arr[i].filter(x => this.findCoincided(winning_arr, x));
      console.log(i, " ", correct, correct.length);
      switch(correct.length){
        case 3: 
          result[0]++;
          break;
        case 4: 
          result[1]++;
          break;
        case 5: 
          result[2]++;
          break;
        case 6: 
          result[4]++;
          break;
      }
      if(correct.length === 5 && lotto_arr.includes(bonus_num)) result[3]++;
    }
    return result;
  }
  
  
  play() {
    try{
      MissionUtils.Console.readLine('구입금액을 입력해 주세요.', async(money) => {
        if(await this.checkInput(money)){
          const lotto_cnt = Math.floor(money/1000);
          const lotto_arr = [];
          const winning_arr = [];
          const bonus_arr = [];
  
          this.print_lotto_cnt(lotto_cnt);
          this.draw_lotto(lotto_cnt, lotto_arr);
          this.inputWinningNum(winning_arr);
          this.inputBonusNum(bonus_arr);
          const result = this.resultCompare(winning_arr, bonus_arr[0], lotto_arr);
        }
        await MissionUtils.Console.close();
      });
    }catch(e){
      throw "[ERROR]"
    }
  }
}

const app = new App();
app.play();

module.exports = App;
