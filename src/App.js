class App {
  play() {}
  userBuyLotto() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요. \n",
      (buyPrice) => {
        if (buyPrice % 1000 !== 0) {
          throw new Error("알맞는 금액을 입력해 주세요.");
        }
        return this.userLottoNumber(buyPrice / 1000);
      }
    );
  }
}

module.exports = App;
