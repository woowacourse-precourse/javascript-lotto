const { PURCHACE_MESSAGE } = require("../constants/constant");
const LottoNumberGenerator = require("../domain/LottoNumberGenerator");
const MessageOutput = require("../domain/MessageOutput");

class State {
  lottoInput = 0;
  winNumbers = [];
  moneyInput = 0;
  buyLottoCount = 0;
  buyLottoNumbers = [];

  MessageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();

  setLottoInput() {}
  setMoneyInput(userInput) {
    this.moneyInput = userInput;
    this.buyLottoCount = parseInt(userInput / 1000);
    this.MessageOutput.printMesage(`${this.buyLottoCount}${PURCHACE_MESSAGE}`);
    this.pickuserLottos(this.buyLottoCount);
  }
  pickuserLottos(buyLottoCount) {
    const lottos = [];
    for (let count = 1; count <= buyLottoCount; count++) {
      const lotto = this.lottoNumberGenerator.createRandomNumbers();
      lottos.push(lotto);
    }
    this.buyLottoNumbers = lottos;
  }
}

module.exports = State;
