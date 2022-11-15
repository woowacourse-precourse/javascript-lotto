class Model {
  constructor() {
    this.userMoney = '';
    this.userBonusNumber = '';
    this.userLottoNumber = '';
    this.lottoLists = [];
    this.lottoResults = {
      five_th: 0,
      four_th: 0,
      three_rd: 0,
      two_nd: 0,
      one_st: 0,
    };
  }
}
module.exports = Model;
