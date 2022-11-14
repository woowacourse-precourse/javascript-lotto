const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const PRICE_FIRST = 2000000000;
const PRICE_SECOND = 30000000;
const PRICE_THIRD = 1500000;
const PRICE_FOURTH = 50000;
const PRICE_FIFTH = 5000;

class App {
	_price;
	_winningRecords;
	_lottoList;
	_winningNumbers;
	_winningBonusNumber;
	_lottoCount;

	constructor() {
		this._price = 0;
		this._winningRecords = {
			first: 0,
			second: 0,
			third: 0,
			fourth: 0,
			fifth: 0,
		};
		this._lotto_list = null;
		this._winningNumbers = null;
		this._winningBonusNumber = 0;
		this._lottoCount = 0;
	}

	play() {
		Console.readLine('구입금액을 입력해 주세요.\n', money => {
			checkInputMoneyValid(money);
			this._lottoCount = Number(money);
			this._lottoList = createLottoList(money);
			this.printLottoList();
			this.inputWinningNumbers();
		});
	}

	printLottoList() {
		Console.print(this._lottoList.length + '개를 구매했습니다.');
		this._lottoList.forEach(lotto => lotto.printLottoNumbers());
		Console.print('\n');
	}

	inputWinningNumbers() {
		Console.readLine('당첨 번호를 입력해 주세요.\n', input => {
			const numbers = input.split(',').map(Number);
			checkWinningNumbersInputValid(numbers);
			Console.print('\n');
			this.inputWinningBonusNumber(numbers);
		});
	}

	inputWinningBonusNumber(winningNumbers) {
		Console.readLine('보너스 번호를 입력해 주세요.\n', input => {
			const bonusNumber = Number(input);
			checkWinningBonusNumberValid(bonusNumber, winningNumbers);
			this.calculateTotalWinningPrice(winningNumbers, bonusNumber);
			this.printResult();
			Console.close();
		});
	}

	calculateTotalWinningPrice(winningNumbers, bonusNumber) {
		this._lottoList.forEach(lottoClass => {
			const lotto = lottoClass.getLottoNumbers();
			const count = countLottoNumbers(lotto, winningNumbers);
			this._price += calculateWinningPrice(count, lotto, bonusNumber);
			this.recordWinningInfo(count, lotto, bonusNumber);
		});
	}
	recordWinningInfo(count, lottoNumbers, bonusNumber) {
		if (count === 3) this._winningRecords.fifth += 1;
		if (count === 4) this._winningRecords.fourth += 1;
		if (count === 5) lottoNumbers.includes(bonusNumber) ? (this._winningRecords.second += 1) : (this._winningRecords.third += 1);
		if (count === 6) this._winningRecords.first += 1;
	}

	calYield() {
		return (this._price / this._lottoCount).toFixed(1);
	}

	printResult() {
		Console.print('\n당첨 통계');
		Console.print('---');
		Console.print('3개 일치 (5,000원) - ' + this._winningRecords.fifth + '개');
		Console.print('4개 일치 (50,000원) - ' + this._winningRecords.fourth + '개');
		Console.print('5개 일치 (1,500,000원) - ' + this._winningRecords.third + '개');
		Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - ' + this._winningRecords.second + '개');
		Console.print('6개 일치 (2,000,000,000원) - ' + this._winningRecords.first + '개');
		Console.print('총 수익률은 ' + this.calYield() + '%입니다.');
	}
}

function calculateWinningPrice(count, lottoNumbers, bonusNumber) {
	if (count === 3) return PRICE_FIFTH;
	if (count === 4) return PRICE_FOURTH;
	if (count === 5) return lottoNumbers.includes(bonusNumber) ? PRICE_SECOND : PRICE_THIRD;
	if (count === 6) return PRICE_FIRST;
	return 0;
}

function countLottoNumbers(lottoNumbers, winningNumbers) {
	return lottoNumbers.filter(number => winningNumbers.includes(number)).length;
}

function checkWinningNumbersInputValid(numbers) {
	if (numbers.length !== 6) throw new Error('[ERROR] 당첨 번호는 6개입니다.');
	if (numbers.some(number => isNaN(number) || 1 > number || 45 < number)) throw new Error('[ERROR] 번호 입력 값이 잘못 되었습니다.');
}

function checkWinningBonusNumberValid(bonusNumber, winningNumbers) {
	if (isNaN(bonusNumber) || 1 > bonusNumber || 45 < bonusNumber || winningNumbers.includes(bonusNumber))
		throw new Error('[ERROR] 번호 입력 값이 잘못 되었습니다.');
}

function checkInputMoneyValid(moneyString) {
	const money = Number(moneyString);

	if (isNaN(money)) throw new Error('[ERROR] 금액 입력이 잘못 되었습니다.');
	if (money % 1000) throw new Error('[ERROR] 1,000원 단위로 입력하셔야 합니다.');
}

function createLottoList(moneyString) {
	const number = Number(moneyString) / 1000;
	const list = [];
	for (let i = 0; i < number; i++) {
		const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
		list.push(new Lotto(lottoNumbers));
	}
	return list;
}

new App().play();

module.exports = App;
