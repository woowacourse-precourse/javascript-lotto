const Lotto = require('../lotto/Lotto');

const LottoMaker = {
  makeLotto(generateRandomNumbers) {
    return new Lotto(generateRandomNumbers());
  },
  makeLottoTicket(count, generateRandomNumbers) {
    return Array.from({ length: count }, () => LottoMaker.makeLotto(generateRandomNumbers));
  },
};

module.exports = LottoMaker;
