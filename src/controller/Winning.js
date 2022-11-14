const Model = require("../model/Model");
const View = require("../view/View");
const Lotto = require("../Lotto");
const Ranks = require("./Ranks");

class Winning{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  start(){
    this.view.inputWin();
  }
  validateWin(input){
    const check = /^[0-9]+$/;
    input.split(',').forEach((target)=>{
      if(!check.test(target)){
        throw new Error("[ERROR] 로또 번호는 숫자로 이루어져야 합니다.")
      }
    })
  }
  validateBonus(input){
    const check = /^[0-9]+$/;
    if(!check.test(input)){
      throw new Error("[ERROR] 보너스 번호는 숫자로 이루어져야 합니다.")
    }
  }
  checkWinNumbers(win_numbers){
    const lotto = new Lotto(win_numbers);
  }
  checkBonusNumber(bonus_number){
    if(this.model.getWin().includes(bonus_number)){
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 포함되면 안됩니다")
    }
    if(bonus_number<1 || bonus_number>45){
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }
  controllWin(input){
    this.validateWin(input);
    const win_numbers = input.split(',').map((number)=>parseInt(number));
    this.checkWinNumbers(win_numbers);

    this.model.setWin(win_numbers);
    this.view.inputBonus();
  }
  controllBonus(input){
    this.validateBonus(input);
    const bonus_number = parseInt(input);
    this.checkBonusNumber(bonus_number);

    this.model.setBonus(bonus_number);
    this.next();
  }
  next(){
    const ranks = new Ranks(this.model.chart);
    ranks.controll();
  }
}

module.exports = Winning;