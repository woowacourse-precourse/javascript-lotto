const { Console } = require('@woowacourse/mission-utils');

class Lotto {
	#numbers;

	constructor(numbers) {
		this.validate(numbers);
		numbers.sort((a, b) => a - b);
		this.#numbers = numbers;
	}

	validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
		if (new Set(numbers).size !== 6) throw new Error('[ERROR] 로또에 중복된 번호는 없어야 합니다.');
		if (numbers.some(number => number < 1 || number > 45)) throw new Error('[ERROR] 로또의 각 번호는 1 ~ 45 범위의 숫자여야 합니다.');
	}

	// TODO: 추가 기능 구현

	getLottoNumbers() {
		return this.#numbers.slice();
	}

	printLottoNumbers() {
		Console.print(`[${this.#numbers.join(', ')}]`);
	}
}

module.exports = Lotto;
