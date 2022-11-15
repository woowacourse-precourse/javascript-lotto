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
    return duplication_number.length;
  }
  


}

module.exports = ResultStats;
