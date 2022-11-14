const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class LottoModel {
  constructor(controller) {
    this.controller = controller;
    this.numberArr, this.bonusNumberArr, this.lottoNumberArr;
    this.lottoPay;
  }
  inputValidCheck(input) {
    if (/[^\d]/g.test(input)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호에 문자가 포함 되있습니다.");
    }

    if (input % 1000 !== 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1,000원 단위가 아닙니다");
    }

    return input;
  }

  countLotto(input) {
    this.lottoPay = input;
    return input / 1000;
  }

  getLottoNumPrint(countLotto) {
    let sortNumberArr = [];
    for (let i = 0; i < countLotto; i++) {
      const sortNumbers = MissionUtils.Random.pickUniqueNumbersInRange( 1, 45, 6 ).sort((prevNum, nextNum) => prevNum - nextNum);
      let stringSortNumber = `[${sortNumbers.join(", ").trim()}]`;
      sortNumberArr.push(sortNumbers);
      MissionUtils.Console.print(stringSortNumber);
    }

    this.lottoNumberArr = sortNumberArr;
  }

  lottoNumberError(inputNumber) {
    let convertNumber = inputNumber.split(",").map((string) => +string);

    try {
      new Lotto(convertNumber);
    } catch (errorMessage) {
      MissionUtils.Console.close();
      throw new Error(errorMessage)
    }

    this.numberArr = convertNumber;
    return inputNumber;
  }

  lottoBonusNumberError(bonusInputNumber) {
    let convertNumber = bonusInputNumber.split(",").map((string) => +string);
    let isNan = convertNumber.some((item) => isNaN(item));

    if (isNan) { MissionUtils.Console.close(); throw new Error("[ERROR] 로또 번호에 문자가 포함 돼 있습니다."); }
    if (convertNumber > 45 || convertNumber < 1) { MissionUtils.Console.close(); throw new Error("[ERROR] 1 ~ 45 숫자에 포함되지 않습니다."); }
    if (convertNumber.length > 1) { MissionUtils.Console.close(); throw new Error("[ERROR] 보너스 번호가 2개 이상 되었습니다"); }

    this.bonusNumberArr = convertNumber;
    return bonusInputNumber;
  }

  collectCalculator() {
    let basicScore = Array(5).fill(0);

    for (let lottoNumbers of this.lottoNumberArr) {
      let collectList = lottoNumbers.filter((lottoNumber) => { return this.numberArr.includes(lottoNumber); });
      let collectBonus = lottoNumbers.filter((lottoNumber) => { return this.bonusNumberArr.includes(lottoNumber); });
      this.makeAssistantCollect(collectList, collectBonus, basicScore);
    }

    return basicScore;
  }

  makeAssistantCollect(collectList, collectBonus, basicScore) {
    if (collectList.length === 3) basicScore[0] += 1;
    if (collectList.length === 4) basicScore[1] += 1;
    if (collectList.length === 5 && collectBonus.length === 0) basicScore[2] += 1;
    if (collectList.length === 5 && collectBonus.length === 1) basicScore[3] += 1;
    if (collectList.length === 6) basicScore[4] += 1;
  }

  percentCalculator() {
    let moneyArray = [5000, 50000, 1500000, 30000000, 2000000000];
    let collectList = this.collectCalculator();
    let save = 0;

    for (let i = 0; i < moneyArray.length; i++) {
      save += collectList[i] * moneyArray[i];
    }

    const persentage = ((save / this.lottoPay) * 100).toFixed(1);

    return persentage;
  }

  resultMessage() {
    let resultMessage = [ "3개 일치 (5,000원) - ", "4개 일치 (50,000원) - ", "5개 일치 (1,500,000원) - ", "5개 일치, 보너스 볼 일치 (30,000,000원) - ", "6개 일치 (2,000,000,000원) - ", ];
    let collectList = this.collectCalculator();
    let benefitPercent = this.percentCalculator();

    for (let i = 0; i < resultMessage.length; i++) {
      MissionUtils.Console.print(resultMessage[i] + collectList[i] + "개");
    }
    MissionUtils.Console.print(`총 수익률은 ${benefitPercent}%입니다.`);
  }
}

module.exports = LottoModel;
