let UserInput = require("./hooks/UserInput");
let Validation = require("./hooks/Validation");
let { Console } = require("@woowacourse/mission-utils");
let { MATCHING, MATCHING_WINNING, MESSAGES } = require("./utils/constants");

class PrintLotto {
	winNumbers;
	bonusNumbers;
	lottos;

	inputPayment() {
		Console.readLine(MESSAGES.MONEY, payment => {
			let validation = new Validation();

			validation.isValidInput(payment);

			this.userinput = new UserInput(payment);
			this.lottos = this.userinput.buyLotto(payment / 1000);

			this.printLottoNumber();
			this.inputWinNumber();
		});
	}

	printLottoNumber() {
		Console.print(`${this.lottos.length}${MESSAGES.BUY}`);

		this.lottos.forEach(lotto =>
			Console.print(`[${lotto.lottoNumbers().join(", ")}]`)
		);
	}

	inputWinNumber() {
		Console.readLine(MESSAGES.WINNUMBER, winNumbers => {
			this.winNumbers = winNumbers.split(",").map(numbers => +numbers);

			this.inputBonusNumber();
		});
	}

	inputBonusNumber() {
		Console.readLine(MESSAGES.BONUSNUMBER, bonusNumbers => {
			this.bonusNumbers = bonusNumbers;
			this.printResult();

			Console.close();
		});
	}

	printResult() {
		Console.print(MESSAGES.RESULT);

		let matchingCountList = this.userinput.countMatchingNumber(
			this.lottos,
			this.winNumbers,
			this.bonusNumbers
		);

		this.printMatchingNumber(matchingCountList);
		this.printReturnOfRate(matchingCountList);
	}

	printMatchingNumber(matchingCountList) {
		Object.keys(MATCHING).forEach((match, index) => {
			Console.print(
				`${MATCHING[match]} ${MATCHING_WINNING[match]} - ${
					matchingCountList[index + 3]
				}개`
			);
		});
	}

	printReturnOfRate(matchingCountList) {
		let payment = this.userinput.payment;
		let proceeds = this.userinput.calculateProceeds(matchingCountList);

		Console.print(
			`총 수익률은 ${this.userinput.rateOfReturn(payment, proceeds)}%입니다.`
		);

		Console.close();
	}
}

module.exports = PrintLotto;
