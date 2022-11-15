const Model = require("../model/Model");
const View = require("../view/View");
const {Random} = require("@woowacourse/mission-utils");
const Winning = require("./Winning");

class Publish{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  calculateNumberOfLotto(){ 
    const paid = this.model.chart.paid;
    return paid/1000;
  }
  makeNumbers(){ 
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
  controllPublish(){
    const number_of_lotto = this.calculateNumberOfLotto();
    this.model.setNumberOfLotto(number_of_lotto); 

    this.model.initPublished();

    while(this.model.getPublished().length < number_of_lotto){ 
      this.model.addPublished(this.makeNumbers());
    }
    this.view.printNumberOfLotto(number_of_lotto);
    this.view.printPublished(this.model.getPublished());
    
    this.next();
  }
  next(){
    const winning = new Winning(this.model.chart);
    winning.startWinning();
  }
}

module.exports = Publish;