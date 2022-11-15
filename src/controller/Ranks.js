const Model = require("../model/Model");
const View = require("../view/View");
const Profit = require("./Profit");

class Ranks{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  matchCheck(target){
    let count = target.reduce(
      (cnt, element) => cnt + (this.model.getWin().includes(element)), 0);
    return count;
  }
  bonusCheck(target){
    return target.includes(this.model.getBonus());
  }
  makeRank(target){
    const count = this.matchCheck(target);
    if(count===6){
      return 4;
    }
    if(count===5){
      return 2 + (this.bonusCheck(target) && 1);
    }
    return count-3;
  }
  controllRanks(){
    this.model.initRank();
    const published = this.model.getPublished();
    published.forEach((numbers)=>{
      const rank = this.makeRank(numbers);
      if (rank>-1) { this.model.addRank(rank, numbers); }
    })

    this.view.printRank(this.model.getRank());
    
    this.next();
  }
  next(){
    const profit = new Profit(this.model.chart);
    profit.profitControll();
  }
}

module.exports = Ranks;