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
		Console.readline("", input => {
			const inputNum = input.split(",").map(Number);

			this.isWinValidation(inputNum);
			this.winLottoNums = inputNum;
		});
	}

	isWinValidation(input) {
		const inputNum = input.split(",");

		if ([...new Set(inputNum)].length !== 6) {
			throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
		}

		inputNum.forEach(num => {
			if (isNaN(num)) {
				throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
			}
			if (Number(num) > 1 && Number(num) < 45) {
				throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
			}
		});
	}
	play() {
		Console.print("구입금액을 입력해 주세요.");
	}
}

module.exports = App;
