const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  checkInput(money){
    try{
      if(isNaN(money)){
        // throw "[ERROR] 숫자로만 이루어져야합니다."
        return 0;
      }
    }catch(e){
      console.log(e);
    }

    return 1;
  }


  print_lotto_cnt(lotto_cnt){
    MissionUtils.Console.print(`${lotto_cnt}개를 구매했습니다.`);
  }


  draw_lotto(lotto_cnt, lotto_arr){
    for(let i=0; i<lotto_cnt; i++){
      let drawed = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(drawed);
      
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


  calWinnings(result){
    let winnings = 0;
    const money_arr = [5000, 50000, 1500000, 30000000, 2000000000];
    for(let i=0; i<money_arr.length; i++){
      winnings += money_arr[i]*result[i];
    }
    return winnings;
  }
  

  calRevenue(lotto_cnt, total_winnings){
    const purchase_price = lotto_cnt*1000;
    const revenue = (total_winnings/purchase_price * 100);
    return revenue;
  }


  printResult(result, lotto_cnt){
    // MissionUtils.Console.print(`당첨 통계`);
    // MissionUtils.Console.print(`---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);

    const total_winnings = this.calWinnings(result);
    const revenue = this.calRevenue(lotto_cnt, total_winnings);
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.`);
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
          this.printResult(result, lotto_cnt);
        }
        await MissionUtils.Console.close();
      });
    }catch(e){
      console.log(e);
      // throw "[ERROR]"
    }
  }
}

const app = new App();
app.play();

module.exports = App;
