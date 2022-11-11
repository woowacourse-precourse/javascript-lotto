const MissionUtils = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;
const SPECIAL_CHARACTERS = /[~!@#$%^&*()_+|<>?:{}]/;

class User {

  enterLottoBuyPrice() {
    let lottoPrice = 0;
    MissionUtils.Console.readLine("금액을 입력해주세요", (price) => {
      lottoPrice = price;
    });
    if (lottoPrice % LOTTO_PRICE != 0 || lottoPrice <= 0 || lottoPrice === String || SPECIAL_CHARACTERS.test(lottoPrice)) {
      throw "[ERROR]";
    }
    return lottoPrice;
  }

  lottoNumberOfPapers(price) {
    return price / 1000;
  }

  createLottoNumber(numberOfPapers) {
    let lottoNumber = [];
    for (let paper = 0; paper < numberOfPapers; paper++) {
      lottoNumber[paper] = (MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottoNumber;
  }
}

module.exports = User;