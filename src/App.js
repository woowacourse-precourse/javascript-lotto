const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, INPUT_MESSAGE, PRINT_MESSAGE } = require('./constants');
const Lotto = require('./Lotto');
const { numberValidation } = require('./utils');

class App {
	#payment;
	#lottos;
	#winning_number;
	#bonus_number;
	#result;

	play() {
		this.getPayment();
	}

	getPayment() {
		Console.readLine(INPUT_MESSAGE.GET_PAYMENT, moneyStr => {
			this.validateAmount(moneyStr);

			this.printPurchaseQuantity();
		});
	}

	printPurchaseQuantity() {
		const quantity = this.#payment / 1000;
		Console.print(PRINT_MESSAGE.QUANTITY(quantity));

		this.generateLottos(quantity);
	}

	generateLottos(cnt) {
		const lottos = [];

		Array(cnt)
			.fill(0)
			.map(() => {
				const random_number = Random.pickUniqueNumbersInRange(1, 45, 6);
				const lotto = new Lotto(random_number);
				Console.print(PRINT_MESSAGE.LOTTO(lotto));
				lottos.push(lotto);
			});

		this.#lottos = lottos;

		this.getWinningNumber();
	}

	getWinningNumber() {
		Console.readLine(INPUT_MESSAGE.GET_WINNING, numbersStr => {
			this.validateWinningNumber(numbersStr);
			this.getBonusNumber();
		});
	}

	getBonusNumber() {
		Console.readLine(INPUT_MESSAGE.GET_BONUS, numberStr => {
			this.#bonus_number = this.validateBonusNumber(numberStr);
			this.generateResult();
		});
	}

	generateResult() {
		const answerCountArr = this.#lottos.map(lotto => lotto.checkResult(this.#winning_number, this.#bonus_number));
		const result = [0, 0, 0, 0, 0];

		answerCountArr.map(cnt => {
			switch (cnt) {
				case 3:
					result[0] += 1;
					break;
				case 4:
					result[1] += 1;
					break;
				case 5:
					result[2] += 1;
					break;
				case 'bonus':
					result[3] += 1;
					break;
				case 6:
					result[4] += 1;
					break;
			}
		});

		this.#result = result;

		this.printResult();
	}

	printResult() {
		Console.print(PRINT_MESSAGE.RESULT(this.#result));

		this.printProfitRate();
	}

	printProfitRate() {
		const prize = [5000, 50000, 1500000, 3000000, 2000000000];
		let totalPrize = 0;

		for (let i = 0; i < this.#result.length; i++) {
			totalPrize += this.#result[i] * prize[i];
		}

		const profit = ((totalPrize / this.#payment) * 100).toFixed(1);

		Console.print(PRINT_MESSAGE.PROFIT(profit));
		this.close();
	}

	close() {
		Console.close();
	}

	validateAmount(moneyStr) {
		const money = numberValidation(moneyStr);

		if (money < 1000) {
			throw Error(ERROR_MESSAGE.VALID_PAYMENT.AMOUNT);
		}
		if (money % 1000 !== 0) {
			throw Error(ERROR_MESSAGE.VALID_PAYMENT.UNIT);
		}

		this.#payment = money;
	}

	validateWinningNumber(numbersStr) {
		const numbers = numbersStr
			.replace(/\s/gi, '')
			.split(',')
			.map(str => numberValidation(str));

		const winning_lotto = new Lotto(numbers);

		this.#winning_number = winning_lotto.numbers;
		Console.print(this.#winning_number);
	}

	validateBonusNumber(numberStr) {
		const number = numberValidation(numberStr);

		if (number < 1 && number > 45) {
			throw Error(ERROR_MESSAGE.VALID_LOTTO.RANGE);
		}

		if (this.#winning_number.includes(number)) {
			throw Error(ERROR_MESSAGE.VALID_BONUS.DUPLICATE);
		}

		this.#bonus_number = number;
	}
}

module.exports = App;
