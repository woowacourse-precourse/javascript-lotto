const Lotto = require('./Lotto');
const {
  Console,
  Random,
  PLZ_INPUT_PRICE,
  PURCHASE_LOTTO_COUNT,
  PLZ_INPUT_WIN_NUMBER,
  PLZ_INPUT_BONUS_NUMBER,
  WINNING_STATISTICS,
  THREE_SAME,
  FOUR_SAME,
  FIVE_SAME,
  FIVE_SAME_BONUS_SAME,
  SIX_SAME,
} = require('./Constant');
class App {
  inputPrice; // 받은 금액
  lottoCnt; // 로또 갯수
  lottoNumberList = []; // 구매한 로또 리스트
  winningNum; // 당첨 번호
  bonusNum; // 보너스 번호
  sameCnt = 0; // 각 로또 당 같은 번호 갯수
  bonusCnt = 0; // 보너스 번호 같으면 1, 다르면 0
  sameArr = []; // 로또 마다 같은 갯수 배열
  numberOfWins = [0, 0, 0, 0, 0]; // 1,2,3,4,5등 당첨 갯수
  revenueRate; // 수익률
  play() {
    new Lotto();
  }
}

module.exports = App;
