const Model = require("../model/Model")
const View = require("../view/View")

class PayAmount{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  start(){
    this.view.inputPaid();
  }
  validPaid(paid){
    if(paid%1000){
      throw new Error("[ERROR] 지불 금액은 1000원 단위여야 합니다.")
    }
    return true;
  }
  controll(input){
    const paid = parseInt(input);
    if(this.validPaid(paid)){
      this.model.setPaid(paid);
    }
  }
}

module.exports = PayAmount;