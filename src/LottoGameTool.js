const { Console } = require('@woowacourse/mission-utils');
const ServeValidtion = require('./ServeValidtion');
const GameHandler = require('./GameHandler');
const Lotto = require('./Lotto');
const { PROCESS_MESSAGE, RESULT_MESSAGE, LOTTO_RANK, RATE_OF_RETURN } = require('./Constant')

class LottoGameTool {
  constructor() {
    this.buyLottoprice;
    this.buyLottoSave;
    this.jackpotNumber;
    this.bonusNumber;
    this.matchList;
  }

  lottoBuyStart() {
    Console.readLine(PROCESS_MESSAGE.BUY_START, (price) => this.butLottoInput(price));
  }

  butLottoInput(price) {
    this.buyLottoprice = price;
    ServeValidtion.validateLottoBuyPrice(price)

    this.buyLottoDisplay();
  }

  buyLottoDisplay() {
    const buyLottoCount = GameHandler.randomNumberCount(this.buyLottoprice);
    this.buyLottoSave = GameHandler.randomNumberSaveKit(buyLottoCount);
    Console.print(`\n${buyLottoCount}${PROCESS_MESSAGE.BUY_LIST}`);
    this.buyLottoSave.map((buyLotto) => {
      Console.print(`[${buyLotto.join(', ')}]`);
    });

    this.getJackpotNumberStart();
  }

  getJackpotNumberStart() {
    Console.readLine(PROCESS_MESSAGE.JACKPOT_START, (number) => this.jackpotInput(number));
  }

  jackpotInput(number) {
    this.jackpotNumber = number;
    new Lotto(this.jackpotNumber.split(','));
    ServeValidtion.validateJackpotNumber(number);

    this.getBonusNumberStart();
  }

  getBonusNumberStart() {
    Console.readLine(PROCESS_MESSAGE.BONUS_START, (number) => this.bonusInput(number));
  }

  bonusInput(number) {
    this.bonusNumber = number;
    ServeValidtion.validateLottoBonusNumber(this.bonusNumber, this.jackpotNumber);

    this.jackpotResultDisplay();
  }

  jackpotResultDisplay() {
    this.matchList = GameHandler.hasJackpotCount(this.buyLottoSave, this.jackpotNumber, this.bonusNumber);
    Console.print(RESULT_MESSAGE.TOP_TEXT);
    Console.print(RESULT_MESSAGE.MIDDLE_TEXT);
    Console.print(`${RESULT_MESSAGE.WON_LOTTE_FIVE}${this.matchList[LOTTO_RANK.FIVE]}${RESULT_MESSAGE.END}`);
    Console.print(`${RESULT_MESSAGE.WON_LOTTE_FOUR}${this.matchList[LOTTO_RANK.FOUR]}${RESULT_MESSAGE.END}`);
    Console.print(`${RESULT_MESSAGE.WON_LOTTE_THREE}${this.matchList[LOTTO_RANK.THREE]}${RESULT_MESSAGE.END}`);
    Console.print(`${RESULT_MESSAGE.WON_LOTTE_TWO}${this.matchList[LOTTO_RANK.TWO]}${RESULT_MESSAGE.END}`);
    Console.print(`${RESULT_MESSAGE.WON_LOTTE_ONE}${this.matchList[LOTTO_RANK.ONE]}${RESULT_MESSAGE.END}`);

    this.rateOfReturnResultDisplay();
  }

  rateOfReturnResultDisplay() {
    const jackpotMoneyList = GameHandler.jackpotMoneyList();
    const totalMoney = GameHandler.totalJackpotMoney(this.matchList, jackpotMoneyList);
    const rateOfReturn = GameHandler.rateOfReturnCalculator(totalMoney, this.buyLottoprice);
    Console.print(`${RATE_OF_RETURN.HEADER_TEXT}${rateOfReturn}${RATE_OF_RETURN.FOOTER_TEXT}`);

    Console.close();
  }
}

module.exports = LottoGameTool;
