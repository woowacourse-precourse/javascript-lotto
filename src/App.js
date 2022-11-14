const UserInput = require("./UserInput.js");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
	lottoCnt;

	userInputLotto(price) {
		let userInput = new UserInput(price);
		this.lottoCnt = userInput.lottoCnt;
	}

	printLottoCnt(lottoCnt) {
		Console.print(`${lottoCnt}개를 구매했습니다.`);
	}
	play() {
		Console.print("구입금액을 입력해 주세요.");
	}
}

module.exports = App;
