const MissionUtils = require("@woowacourse/mission-utils");
const ResultStats = require("../game-machine/ResultStats");
class DrawLotto {
  constructor(){
    this.draw_number;
    this.bonus_number;
  }
    
    inputDrawNumbers(){
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (draw_number) => {
        console.log(draw_number);
        this.draw_number = draw_number;
        this.inputBounsNumbers();
    });
    }
    inputBounsNumbers(){
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonus_number) => {
        console.log(bonus_number);
        this.bonus_number=bonus_number;
        this.sendDrawAndBonusNumber();
    });
    }

    sendDrawAndBonusNumber(){
      const result_stats = new ResultStats();
      result_stats.getDrawAndBonusNumber(this.draw_number,this.bonus_number);
    }

  }
  const draw_lotto = new DrawLotto();
  module.exports = DrawLotto;
  