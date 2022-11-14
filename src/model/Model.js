// < DATA >
// lottoChart = {
//   paid            : number,
//   number_of_lotto : number,
//   published       : [[numberArray],[numberArray],...],
//   win_numbers     : [numberArray],
//   bonus_number    : number,
//   rank            : [[numberArray],[numberArray],...],
//   profit          : float
// } 

class Model{
  constructor(lottoChart){
    this.chart = lottoChart;
  }
  getPaid(){
    return this.chart.paid;
  }
  setPaid(data){
    this.chart.paid = data;
  }
}

module.exports = Model;