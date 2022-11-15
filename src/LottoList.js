const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const MONEY_UNIT = 1000;

class LottoList {

	userInput = (amount) => {
		this.isValidAmount(amount);
	}
	
	isValidAmount(amount) {
		if(amount % MONEY_UNIT !== 0) {
			throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다."); 
		}
		return amount / MONEY_UNIT;
	}
	
	makeLottoList(total) {
		const lottoList = [];
		const stringedLottoList = [];
			for(let i = 0; i < total; i++) {
				let randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
				randomNumbers = randomNumbers.sort((a, b) => a - b);
				let stringedLottos = `[${randomNumbers.join(', ')}]`;
				lottoList.push(randomNumbers);
				stringedLottoList.push(stringedLottos);
			}
			return ([lottoList, stringedLottoList]);
	}

	printLottoList(total, lottoList) {
		Console.print(`\n${total}개를 구매했습니다.`);
		for(let i = 0; i < total; i++) {
			Console.print(lottoList[i].toString());
		}
	}
}

module.exports = LottoList;