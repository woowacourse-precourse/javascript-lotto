const Lotto = require("./Lotto");

class LottoGameHandler {
  gameStart() {
    Lotto.checkUserMoney();
  }
}
