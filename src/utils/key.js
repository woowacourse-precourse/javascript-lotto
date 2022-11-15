const KEY_PURCHASE_MONEY = "purchaseMoney";
const KEY_LOTTERY_NUMBER = "lotteryNumber";
const KEY_BONUS_NUMBER = "bonusNumber";
const KEY_LOTTO_NUMBER = "lottoNumber";
const KEY_LOTTERY_NUMBER_LIST = "lotteryNumberList";
const KEY_WINNING_RESULT = "winningResult";
const KEY_PROFIT_RATE = "profitRate";

const keys = {
  inputType: {
    purchaseMoney: KEY_PURCHASE_MONEY,
    lotteryNumber: KEY_LOTTERY_NUMBER,
    bonusNumber: KEY_BONUS_NUMBER,
  },
  lotto: {
    lotteryNumber: KEY_LOTTERY_NUMBER,
    lottoNumber: KEY_LOTTO_NUMBER,
  },
  print: {
    lotteryNumberList: KEY_LOTTERY_NUMBER_LIST,
    winningResult: KEY_WINNING_RESULT,
    profitRate: KEY_PROFIT_RATE,
  },
};

module.exports = keys;
