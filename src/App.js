const Lotto = require("./Lotto");
const Setting = require("./Setting");
const Ranking = require("./Ranking");

class App
{
  play() {
    const setting = new Setting();

    setting.input();
    setting.createLotto(setting.count);
    setting.winningNumber();

    const lotto = new Lotto(setting.winningNum);
    let result = lotto.compare(setting.lottoList, setting.bonusNum);

    const ranking = new Ranking(result);
    ranking.setRank();
    ranking.yield(setting.money);
  }
}

module.exports = App;
