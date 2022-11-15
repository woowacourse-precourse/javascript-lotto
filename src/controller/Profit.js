const Model = require("../model/Model");
const View = require("../view/View");

class Profit{
  constructor(lottoChart){
    this.model = new Model(lottoChart);
    this.view = new View(this);
  }
  calculateProfit(paid, prize){
    let profit = prize/(paid/1000)*100;
    const roundProfit = Math.round(profit * 10) / 10;
    return roundProfit;
  }
  eachRankPrize(rank){
    if(rank===0){ return 5; }
    if(rank===1){ return 50; }
    if(rank===2){ return 1500; }
    if(rank===3){ return 30000;}
    if(rank===4){ return 2000000; }
  }
  calculatePrize(){
    const ranks = this.model.getRank();
    let prize = 0;
    ranks.forEach((rank, index)=>{
      prize += (rank.length * this.eachRankPrize(index));
    })
    return prize;
  }
  profitControll(){
    const prize = this.calculatePrize();
    const paid = this.model.getPaid();
    const profit = this.calculateProfit(paid, prize);
    this.model.setProfit(profit);
    this.view.printProfit(this.model.getProfit());
  }
}

module.exports = Profit;