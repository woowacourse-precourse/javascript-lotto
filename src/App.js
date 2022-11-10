class App {

  constructor() {
    this.money = null;
    this.lottes = [];
    this.winNumbers = [];
    this.bonusNumber = null;
  }

  setWinNumbers() {
    wConsole.readLine("당첨 번호를 입력해 주세요.\n", (line) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(line))
        throw new Error("[ERROR] 입력형식이 올바르지 않습니다.");
      const numbers = line.split(",").map((number) => {
        if (number < 1 || 45 < number)
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        return parseInt(number);
      });
      const numberSet = new Set(numbers);
      if (numberSet.size != 6)
        throw new Error("[ERROR] 중복번호가 포함되어 있습니다.");
      this.winNumbers = numbers;
      this.setBonusNumber();
    });
  }

  setMoney() {
    wConsole.readLine("구입금액을 입력해 주세요.\n", (line) => {
      if (!/^\d+$/.test(line))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const money = parseInt(line);
      if (money % 1000 !== 0)
        throw new Error("[ERROR] 구입금액의 단위로 적절하지 않습니다.");
      this.money = money;
      this.setWinNumbers();
    });
  }

  play() {
    this.setMoney();
  }
}

module.exports = App;
