const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
const Lotto = require("../game-machine/Lotto");
class ResultStats {
  #lotto_num=[];
  #equal_three=0;
  #equal_four=0;
  #equal_five=0;
  #equal_five_bonus=0;
  #equal_all=0;

  constructor(){
    this.draw_number;
    this.bonus_number;
    this.countWinningLotto();
  }
  
  getDrawAndBonusNumber(draw_number,bonus_number){
    this.draw_number = this.changeDrawNumbersToArray(draw_number);
    this.bonus_number = bonus_number;
  }
  
  changeLottoNumbersToArray(numbers){
    let lotto_list = (numbers + "").split(",");
    this.findDuplicateNumbers(lotto_list);
  }

  changeDrawNumbersToArray(draw_number){
    let draw_arr = (draw_number + "").split(",");
    return draw_arr;
  }

  findDuplicateNumbers(lotto_list){
    let duplication_number = lotto_list.filter(it=>this.draw_number.includes(it));
  
    return this.countWinningLotto(duplication_number.length+1) ;
  }

  countWinningLotto(win_num){
    if(win_num==3)this.#equal_three+=1;
    if(win_num==4)this.#equal_four+=1;
    if(win_num==5)this.#equal_five+=1;
    if(win_num==6)this.#equal_all+=1;

  }

  printWinningResult(){
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5000원) - ${this.#equal_three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.#equal_four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.#equal_five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.#equal_all}개`);
  }

}
module.exports = ResultStats;
