const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
class ResultStats {
  
  getDrawAndBonusNumber(draw_number,bonus_number){
    console.log(draw_number,bonus_number);
  }
}

const result_stats = new ResultStats();
module.exports = ResultStats;
