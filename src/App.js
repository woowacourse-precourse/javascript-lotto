class App {
  play() {}

  inputOfLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
    });
  }
}

module.exports = App;
