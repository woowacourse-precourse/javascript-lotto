class Price {
    constructor(countNormalWinner, countBonusWinner) {
      this.countNormalWinner = countNormalWinner
      this.countBonusWinner = countBonusWinner
    }
  
    calcPrice() {
      let revenue = 0
  
      const normalPrice = [5000, 50000, 1500000, 2000000000]
      //3개 4개 5개 6개
  
      const bonusPrice = 30000000
  
      for (let i = 0; i < this.countNormalWinner.length; i++) {
        revenue += this.countNormalWinner[i] * normalPrice[i]
      }
  
      revenue += bonusPrice * this.countBonusWinner[0]
      return revenue
    }
  }
  
  module.exports = Price