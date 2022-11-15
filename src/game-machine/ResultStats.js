const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
const Lotto = require("../game-machine/Lotto");
class ResultStats {
  #lotto_num=[];

  constructor(){
    this.draw_number;
    this.bonus_number;
  }
  
  getDrawAndBonusNumber(draw_number,bonus_number){
    this.draw_number = this.changeDrawNumbersToArray(draw_number);
    this.bonus_number = bonus_number;
  }

  changeLottoNumbersToArray(numbers){
    let lotto_list = (numbers + "").split(",");
    this.createLottoNumbersList(lotto_list);
  }

  changeDrawNumbersToArray(draw_number){
    let draw_arr = (draw_number + "").split(",");
    this.draw_number=draw_arr;
  }

  createLottoNumbersList(lotto_list){
    this.#lotto_num.push(lotto_list);
  }

  findDuplicateNumbers(){
    let duplication_number = this.#lotto_num.filter(it=>this.draw_number.includes(it));
    if(duplication_number.length+1==5){
      if(this.#lotto_num.includes(this.bonus_number)){
        return 5.5;
      }
    }
    return duplication_number.length+1;
  }

  countWinningLotto(){
    let win_num;
    win_num = this.findDuplicateNumbers();
    let equal_three_num;
    let equal_four_num;
    let equal_five_num;
    let equal_five_bonus_num;
    let equal_all_num;
    if(win_num==3)equal_three_num+=1;
    if(win_num==4)equal_four_num+=1;
    if(win_num==5)equal_five_num+=1;
    if(win_num==5.5)equal_five_bonus_num+=1;
    if(win_num==6)equal_all_num+=1;

    this.printWinningResult(equal_three_num,equal_four_num,equal_five_num,equal_five_bonus_num,equal_all_num);
  }


  printWinningResult(three,four,five,five_bonus,all){
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5000원) - ${three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${five_bonus}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${all}개`);
  }

}

module.exports = ResultStats;
