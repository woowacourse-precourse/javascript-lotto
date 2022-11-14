const Model = require("../model/Model")
const View = require("../view/View")

class Ranks{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  match_check(target){
    let count = target.reduce(
      (cnt, element) => cnt + (this.model.getWin().includes(element)), 0);
    return count;
  }
  bonus_check(target){
    return target.includes(this.model.getBonus());
  }
  make_rank(target){
    const count = this.match_check(target);
    if(count===6){
      return 4;
    }
    if(count===5){
      return 2 + (this.bonus_check(target) && 1);
    }
    return count-3;
  }
  controll(){
    this.model.initRank();
    const published = this.model.getPublished();
    published.forEach((numbers)=>{
      const rank = this.make_rank(numbers);
      if (rank>-1) { this.model.addRank(rank, numbers); }
    })

    this.view.printRank(this.model.getRank());
  }
}

module.exports = Ranks;