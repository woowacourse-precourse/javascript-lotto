class Model {
  constructor() {
    this.userMoney = '';
    this.userBonusNumber = '';
    this.userLottoNumber = '';
    this.lottoLists = [];
    this.lottoResults = {
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
    };
  }
}
module.exports = Model;
