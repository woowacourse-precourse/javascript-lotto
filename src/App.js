class App {

  purchasemoney;
  
  play() {
    this.purchaseLotto();

  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.purchasemoney = money;
    });
  }

}

module.exports = App;
