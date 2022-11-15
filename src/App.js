const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  LOTTOREQUIREMENT,
  LOTTOPRIZE,
} = require("./constant/Constant");
const { printNumber, printLotto, printResult } = require("./LottoView");
const { validateLotto, validateBonus } = require("./LottoValidation");
const Lotto = require("./Lotto");

class App {}

const app = new App();
app.play();

module.exports = App;
