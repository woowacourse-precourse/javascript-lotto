const MissionUtils = require("@woowacourse/mission-utils");
const LottoResultCheck = require("../model/resultCheck");
const { GET_INPUT, VALUE_NUMBER } = require("../utils/constants");

const Lotto = require("../Lotto");
const MessageViewer = require("../view/view");
const ValidationCheck = require("../model/inputCheck");
const LottoGenerator = require("../model/issueLotto");

class LottoGameHandler {
  constructor() {
    this.inputCheck = new ValidationCheck();
    this.viewer = new MessageViewer();
    this.lottoUtil = new LottoGenerator();
  }

  gameStart() {
    this.#buyLotto();
  }

  #buyLotto() {
    MissionUtils.Console.readLine(GET_INPUT.MONEY, (userInput) => {
      this.inputCheck.isMoneyValid(userInput);

      LottoResultCheck.userMoney = userInput;
      const TOTAL_LOTTO_GAMES = parseInt(userInput / VALUE_NUMBER.MONEY_FOR_ONE_GAME);
      this.lottoUtil.generateLotto(TOTAL_LOTTO_GAMES);

      this.#getWinningNumbers();
    });
  }

  #getWinningNumbers() {
    MissionUtils.Console.readLine(GET_INPUT.WINNING_NUMBER, (userInput) => {
      this.inputCheck.isWinningNumberValid(userInput);

      const WINNING_NUMBERS = userInput.split(",").map((arrayElement) => parseInt(arrayElement));
      new Lotto(WINNING_NUMBERS);
      LottoResultCheck.winningNumbers = WINNING_NUMBERS;

      this.#getBonusNumber(WINNING_NUMBERS);
    });
  }

  #getBonusNumber(winningNumbers) {
    MissionUtils.Console.readLine(GET_INPUT.BONUS_NUMBER, (userInput) => {
      this.inputCheck.isBonusNumberValid(winningNumbers, userInput);
      LottoResultCheck.bonusNumber = parseInt(userInput);
      this.#checkWinningOfBoughtLottos();
    });
  }

  #checkWinningOfBoughtLottos() {
    for (let idx = 0; idx < LottoResultCheck.lottoNumbersArray.length; idx++)
      LottoResultCheck.checkWinning(LottoResultCheck.lottoNumbersArray[idx]);
    this.#getResult();
  }

  #getResult() {
    const earningsRate = LottoResultCheck.getEarningsRate();
    this.viewer.resultMessage(LottoResultCheck.resultArray, earningsRate);
  }
}

module.exports = LottoGameHandler;
