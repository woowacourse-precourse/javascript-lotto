const MissionUtils = require("@woowacourse/mission-utils");
const LottoResultCheck = require("./resultCheck");
const LottoGenerator = require("./issueLotto");
const Lotto = require("./Lotto");
const MessageViewer = require("./view");
const ValidationCheck = require("./inputCheck");
const { GET_INPUT, VALUE_NUMBER } = require("./constants");

class LottoGameHandler {
  constructor() {
    this.INPUT_CHECK = new ValidationCheck();
    this.viewer = new MessageViewer();
    this.GetLotto = new LottoGenerator();
  }

  gameStart() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine(GET_INPUT.MONEY, (userInput) => {
      this.INPUT_CHECK.isMoneyValid(userInput);

      LottoResultCheck.userMoney = userInput;
      const TOTAL_LOTTO_GAMES = parseInt(userInput / VALUE_NUMBER.MONEY_FOR_ONE_GAME);
      this.GetLotto.generateLotto(TOTAL_LOTTO_GAMES);

      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    MissionUtils.Console.readLine(GET_INPUT.WINNING_NUMBER, (userInput) => {
      this.INPUT_CHECK.isWinningNumberValid(userInput);

      const WINNING_NUMBERS = userInput.split(",").map((arrayElement) => parseInt(arrayElement));
      new Lotto(WINNING_NUMBERS);
      LottoResultCheck.winningNumbers = WINNING_NUMBERS;

      for (let idx = 0; idx < LottoResultCheck.lottoNumbersArray.length; idx++)
        LottoResultCheck.winningCheck(LottoResultCheck.lottoNumbersArray[idx]);

      this.getBonusNumber(WINNING_NUMBERS);
    });
  }

  getBonusNumber(winningNumbers) {
    MissionUtils.Console.readLine(GET_INPUT.BONUS_NUMBER, (userInput) => {
      this.INPUT_CHECK.isBonusNumberValid(winningNumbers, userInput);
      LottoResultCheck.bonusNumber = userInput;
      this.getResult();
    });
  }

  getResult() {
    const earningsRate = LottoResultCheck.getEarningsRate();
    this.viewer.resultMessage(LottoResultCheck.resultArray, earningsRate);
  }
}

module.exports = LottoGameHandler;
