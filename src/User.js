const MISSION = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;
const SPECIAL_CHARACTERS = /[~!@#$%^&*()_+|<>?:{}]/;

class User {

  enterLottoBuyPrice() {
    let price = MISSION.Console.readLine();
    if (price % LOTTO_PRICE != 0 || price <= 0 || price === String || SPECIAL_CHARACTERS.test(price)) {
      throw new Error("[ERROR]");
    }
    return price;
  }

  lottoNumberOfPapers(price) {
    return price / 1000;
  }

  createLottoNumber(numberOfPapers) {
    let lottoNumber = [];
    for (let paper = 0; paper < numberOfPapers; paper++) {
      lottoNumber[paper] = (MISSION.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottoNumber;
  }
}

module.exports = User;