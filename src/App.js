const UserInput = require("./UserInput.js");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
	lottoCnt;
	winLottoNums;

	userInputLotto(price) {
		let userInput = new UserInput(price);
		this.lottoCnt = userInput.lottoCnt;
	}

	printLottoCnt(lottoCnt) {
		Console.print(`${lottoCnt}개를 구매했습니다.`);
	}

	winLottoNum() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}

	sortedLottoNum(lottoNum) {
		return lottoNum.sort((a, b) => a - b);
	}

	printLottoNum(lottoNum) {
		return Console.print(`[${lottoNum.join(", ")}]`);
	}

	printWinLotto(lottoCnt) {
		for (let i = 0; i < lottoCnt; i++) {
			let lottoNum = this.sortedLottoNum(this.winLottoNum());
			this.printLottoNum(lottoNum);
		}
	}

	useWinLottoNum() {
		Console.print("당첨 번호를 입력해 주세요.");
		Console.readline(
			"",
			num => (this.winLottoNums = num.split(",").map(Number))
		);
	}
	play() {
		Console.print("구입금액을 입력해 주세요.");
	}
}

module.exports = App;
