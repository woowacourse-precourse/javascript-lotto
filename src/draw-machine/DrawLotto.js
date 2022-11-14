const MissionUtils = require("@woowacourse/mission-utils");
class DrawLotto {
  constructor(){
    this.draw_number;
    this.bonus_number;
  }
    
    inputDrawNumbers(){
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (draw_number) => {
        console.log(draw_number);
        this.draw_number = draw_number;
    });
    }
    inputBounsNumbers(){
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonus_number) => {
        console.log(bonus_number);
        this.bonus_number=bonus_number;
    });
    }

    sendDrawNumber(){
      return this.draw_number;
    }

    sendBonusNumber(){
      return this.bonus_number;
    }

  }
  
  module.exports = DrawLotto;
  