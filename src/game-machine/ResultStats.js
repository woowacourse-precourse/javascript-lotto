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
    let arr = (draw_number + "").split(",");
    console.log(arr);
    return arr;
  }

  createLottoNumbersList(lotto_list){
    this.#lotto_num.push(lotto_list);
  }


}

module.exports = ResultStats;
