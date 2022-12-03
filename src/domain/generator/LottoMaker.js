const Lotto = require('../lotto/Lotto');

const LottoMaker = {
  makeLotto(generateRandomNumbers) {
    return Lotto.of(generateRandomNumbers());
  },
  makeLottoTicket(count, generateRandomNumbers) {
    return Array.from({ length: count }, () => LottoMaker.makeLotto(generateRandomNumbers));
  },
};

module.exports = LottoMaker;
