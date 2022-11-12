const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");

class App {
  constructor() {}

  play() {
    // Console.readLine("구입금액을 입력해 주세요.", (userInputPrice) => {
    //   Lotto.getLottoNumber(userInputPrice); // return 값으로 갯수 불러오기
    // });

    makeLottoArray(getLottoNumber(8000));
  }
}
const app = new App();
app.play();

module.exports = App;
