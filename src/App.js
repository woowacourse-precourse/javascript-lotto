const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor(){
    this.lottoCount = 0;
    this.lottoInfo = [];
    this.BonusNumber = '';
    this.lottoResult = [0,0,0,0,0];
  };

  printLottoRevenuePercent(lottoRevenue) {
    let investMoney = 1000 * this.lottoCount;
    let RevenuePercent = lottoRevenue / investMoney;
    Console.print(`총 수익률은 ${RevenuePercent * 100}%입니다.`)
  }

module.exports = App;
