const Validation = require("./Validation");

class Lotto {
	#numbers;

	constructor(numbers) {
		this.valid = new Validation();
		this.valid.inputWinLotto(numbers);
		//this.validate(numbers);
		this.#numbers = numbers;
	}

	/*validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }*/

	// TODO: 추가 기능 구현
	compare(publishLotto, bonus) {
		let compareArr = [0, 0, 0, 0, 0];
		publishLotto.forEach((numbers) => {
			const result = this.oneCompareCount(numbers);

			if (result === 3) compareArr[0]++;
			else if (result === 4) compareArr[1]++;
			else if (result === 5) {
				if (this.#numbers.includes(bonus)) {
					compareArr[3]++;
				} else compareArr[2]++;
			} else if (result === 6) compareArr[4]++;
		});
		return compareArr;
	}
	oneCompareCount(numbers) {
		let count = 0;
		for (let num of numbers) {
			if (this.#numbers.includes(num)) count++;
		}
		return count;
	}
}
module.exports = Lotto;
