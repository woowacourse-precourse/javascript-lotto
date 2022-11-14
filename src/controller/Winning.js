const Model = require("../model/Model");
const View = require("../view/View");
const Lotto = require("./Lotto");
const Ranks = require("./Ranks");

class Winning{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  start(){
    this.view.inputWin();
  }
  validWin(win_numbers){
    const lotto = new Lotto(win_numbers);
    // 로또 중복 테스트 and RETURN
    return lotto.winTest();
  }
  validBonus(bonus_numbers){
    const win_numbers = this.model.getWin();
    const lotto = new Lotto(win_numbers);
    // 보너스 넘버 유효 테스트 and RETURN
    return lotto.bonusTest(bonus_numbers);
  }
  controllWin(input){
    const win_numbers = input.split(',').map((number)=>parseInt(number));
    if(this.validWin(win_numbers)){
      this.model.setWin(win_numbers);
    }
    this.view.inputBonus();
  }
  controllBonus(input){
    const bonus_number = parseInt(input);
    if(this.validBonus(bonus_number)){
      this.model.setBonus(bonus_number);
    }
    this.next();
  }
  next(){
    const ranks = new Ranks(this.model.chart);
    ranks.controll();
  }
}

module.exports = Winning;