const Model = require("../model/Model");
const View = require("../view/View");
const {Random} = require("@woowacourse/mission-utils");

class Publish{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  calculate(){ //paid -> number_of_lotto 계산 !
    const paid = this.model.chart.paid;
    return paid/1000;
  }
  makeNumbers(){ //랜덤 티켓 1장 발행 -> numbers
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
  controll(){
    const number_of_lotto = this.calculate();
    this.model.setNumberOfLotto(number_of_lotto); //number_of_lotto 계산 및 전달

    this.model.initPublished(); //모델 published 초기화

    while(this.model.getPublished().length < number_of_lotto){ // published 에 추가
      this.model.addPublished(this.makeNumbers());
    }
    this.view.printNumberOfLotto(number_of_lotto);
    this.view.printPublished(this.model.getPublished()); // view 에 print
    
  }
}

module.exports = Publish;