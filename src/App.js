const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const ENTER_PRICE = "구입 금액을 입력해주세요";
const ERROR_MARK = "[ERROR]";
const WINNING_REWARDS = [2000000000, 30000000, 1500000, 50000, 5000];
const WINNING_RANK = [
  "6개 일치",
  "5개 일치, 보너스 볼 일치",
  "5개 일치",
  "4개 일치",
  "3개 일치",
];

class App {
  lottoCnt;
  lottoArray;
  winningNum;
  bonusNum;
  rank;

  play() {}
}

module.exports = App;
