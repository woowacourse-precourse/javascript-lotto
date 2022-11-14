const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { MESSAGE } = require("./Message");
const Validation = require("./Validation");

class App {
	constructor() {
		this.valid = new Validation();

		this.state = {
			money: 0,
			buyLotto: 0,
			publishLotto: [],
			bonus: 0,
			winLotto: [],
		};
	}
	play() {
		this.inputMoney();
		this.publishLotto();
		this.inputLotto();
		this.lotto = new Lotto(this.state.winLotto);
		this.inputBonus();
	}

	inputMoney() {
		Console.readLine(MESSAGE.PRINT_INPUT_MONEY, (money) => {
			this.state.money = Number(money);

			this.valid.inputMoney(this.state.money);
			this.state.buyLotto = this.state.money / 1000;
		});
	}
	inputLotto() {
		Console.readLine(MESSAGE.PRINT_INPUT_WIN, (number) => {
			this.state.winLotto = number.split(",").map(Number);
		});
	}
	inputBonus() {
		Console.readLine(MESSAGE.PRINT_BONUS, (number) => {
			this.state.bonus = number;
		});
	}
	publishLotto() {
		Console.print(`${this.state.buyLotto + MESSAGE.PRINT_BUY}`);
		this.state.publishLotto = this.makeLotto(this.state.buyLotto);

		this.state.publishLotto.forEach((ele) => {
			Console.print(`[${String(ele).replaceAll(",", ", ")}]`);
		});
	}
	makeLotto(num) {
		let publishLottoArr = [];
		for (let i = 0; i < num; i++) {
			let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
			numbers = numbers.sort((a, b) => a - b);
			publishLottoArr.push(numbers);
		}
		return publishLottoArr;
	}
}

module.exports = App;
