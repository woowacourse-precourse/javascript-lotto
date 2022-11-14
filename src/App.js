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
		};
	}
	play() {
		this.inputMoney();
	}

	inputMoney() {
		Console.readLine(MESSAGE.PRINT_INPUT_MONEY, (money) => {
			this.state.money = Number(money);

			this.valid.inputMoney(this.state.money);
			this.state.buyLotto = this.state.money / 1000;
		});
	}
}

module.exports = App;
