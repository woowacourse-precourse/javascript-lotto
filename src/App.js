class App {
  play() {}

  computerNumber() {
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    computerRandomNumber.sort((a, b) => a - b);
    const computerBonusNumber = Random.pickNumberInRange(1, 45);
  }
}

module.exports = App;
