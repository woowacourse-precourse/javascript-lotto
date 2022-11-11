const { LOTTO_AMOUNT } = require("./constants/index");

const Buyer = ((_) => {
  const Private = Symbol();
  return class {
    get buyLottoNumber() {
      const { buyLottoNumber } = this[Private];
      return buyLottoNumber;
    }

    get lottos() {
      const { lottos } = this[Private];
      return lottos;
    }

    set setBuyLottoNumber(amount) {
      this[Private] = { buyLottoNumber: Number(amount) / LOTTO_AMOUNT.VALID_UNIT };
    }

    set setLottos(lottos) {
      Object.assign(this[Private], { lottos });
    }
  };
})();

module.exports = Buyer;
