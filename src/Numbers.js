const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const Result = require('./Result');

const { Console, Random } = MissionUtils;

const LOTTO_PRICE = 1000;

class Numbers {
  constructor() {
    this.check = {
      isValidPrice: (answer) => answer % LOTTO_PRICE === 0,
      isInt: (answer) => Number.isInteger(+answer),
    };
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      if (!this.validateForMoney(answer)) {
        // throw new Error(`금액은 ${LOTTO_PRICE}의 배수여야 합니다..`);
        throw new Error('[ERROR]');
      }
      const buyLottoCount = Number(answer) / LOTTO_PRICE;
      this.createRandomLottoNumbers(buyLottoCount);
    });
  }

  validateForMoney(money) {
    const { isValidPrice, isInt } = this.check;
    if (!isValidPrice(money) || !isInt(money)) {
      return false;
    }
    return true;
  }

  createRandomLottoNumbers(buyLottoCount) {
    const lottoAry = [];
    for (let i = 0; i < buyLottoCount; i += 1) {
      const tmpAry = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoAry.push(tmpAry.sort((a, b) => a - b));
    }
    this.printRandomLottoNumbers(buyLottoCount, lottoAry);
    this.inputLottoWinNumber(lottoAry, buyLottoCount);
  }

  printRandomLottoNumbers(buyLottoCount, lottoAry) {
    Console.print(`\n${buyLottoCount}개를 구매했습니다.`);
    for (let i = 0; i < buyLottoCount; i += 1) {
      Console.print(this.makeAryText(lottoAry[i]));
    }
  }

  makeAryText(ary) {
    return `[${ary[0]}, ${ary[1]}, ${ary[2]}, ${ary[3]}, ${ary[4]}, ${ary[5]}]`;
  }

  inputLottoWinNumber(lottoAry, buyLottoCount) {
    let winNumber;
    let bonusNumber;

    Console.readLine('\n당첨 번호를 입력해주세요.\n', (winNumberInput) => {
      winNumber = winNumberInput.split(',').map((i) => Number(i));
      Console.readLine(
        '\n보너스 번호를 입력해 주세요.\n',
        (bonusNumberInput) => {
          bonusNumber = Number(bonusNumberInput);
          const l = new Lotto(winNumber, bonusNumber);
          const r = new Result(lottoAry, winNumber, bonusNumber);
          r.compareLotto(buyLottoCount);
        }
      );
    });
  }
}

module.exports = Numbers;
