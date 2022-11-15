const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
const Lotto = require("../game-machine/Lotto");
class ResultStats {
  #lotto_num=[];

  constructor(numbers){
    this.lotto_num=numbers;
  }
  
  getDrawAndBonusNumber(draw_number,bonus_number){

  }

  changeToArray(numbers){
    let lotto_list = (numbers + "").split(",");
    this.getLottoNumbers(lotto_list);
  }

}

module.exports = ResultStats;
