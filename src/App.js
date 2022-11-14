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
			result: [],
			percent: 0,
		};
		this.static = [
			{
				sameNum: 3,
				money: 5000,
			},
			{
				sameNum: 4,
				money: 50000,
			},
			{
				sameNum: 5,
				money: 1500000,
			},
			{
				sameNum: 5,
				money: 30000000,
			},
			{
				sameNum: 6,
				money: 2000000000,
			},
		];
	}
	play() {
		this.inputMoney();
		this.publishLotto();
		this.inputLotto();
		this.lotto = new Lotto(this.state.winLotto);
		this.inputBonus();
		this.match(this.state.publishLotto, this.state.bonus);
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
	match(publishLotto, bonus) {
		this.state.result = this.lotto.compare(publishLotto, bonus);
		let add = 0;
		this.state.result.forEach((count, index) => {
			add += this.static[index].money * count;
		});
		this.state.percent = ((add / this.state.money) * 100).toFixed(1);
	}
}

module.exports = App;
