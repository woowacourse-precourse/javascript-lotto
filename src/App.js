class App {

  constructor() {
    this.money = null;
    this.lottes = [];
    this.winNumbers = [];
    this.bonusNumber = null;
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
