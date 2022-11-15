const { Console } = require('@woowacourse/mission-utils');

const printCount = (count) => {
	Console.print(`${count}개를 구매했습니다.`);
};

const printLottos = (lottos) => {
	lottos.forEach((lotto) => {
		Console.print(`[${lotto.join(', ')}]`);
	});
};

const printResults = (result) => {
	Console.print('당첨 통계\n---');
	Console.print(`3개 일치 (5,000원) - ${result[3]}개
4개 일치 (50,000원) - ${result[4]}개
5개 일치 (1,500,000원) - ${result[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.bonus}개
6개 일치 (2,000,000,000원) - ${result[6]}개
	`);
};

const printProfitPercent = (profitPercent) => {
	Console.print(`총 수익률은 ${profitPercent}%입니다.`);
};

module.exports = {
	printCount,
	printLottos,
	printResults,
	printProfitPercent,
};
