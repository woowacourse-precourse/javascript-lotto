const Lotto = require("./Lotto");

const judgeEachLotto = (lottoArray, lottoWinArray, bonusNum) => {
  for (let i = 0; i < lottoArray.length; i++) {
    const eachLotto = new Lotto(lottoArray[i]);
    eachLotto.matchLotto(i);
  }
};

module.exports = { judgeEachLotto };
