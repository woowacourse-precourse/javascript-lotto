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
  setNumberOfLotto(data){
    this.chart.number_of_lotto = data;
  }
  initPublished(){
    this.chart.published = [];
  }
  addPublished(data){
    this.chart.published.push(data);
  }
  getPublished(){
    return this.chart.published;
  }
}

module.exports = Model;