const Reward = require('./constants/reward');
const Ment = require('./constants/ment');
const IO = require('./utils/io');

class Prompter {
	static promptInvest(callback) {
		IO.input(Ment.INPUT_INVEST + '\n', callback);
	}

	static promptAnswer(callback) {
		IO.input('\n' + Ment.INPUT_ANSWER + '\n', callback);
	}

	static promptBonus(callback) {
		IO.input('\n' + Ment.INPUT_BONUS + '\n', callback);
	}

	static logBoughtCnt(boughtCnt) {
		IO.output('\n' + boughtCnt + Ment.BOUGHT_CNT_SUFFIX);
	}

	static logResult(score, profitRate) {
		const assembly = ['\n' + '당첨 통계', '---'];
		Object.keys(score)
			.reverse()
			.forEach((v) => {
				const key = v.toUpperCase();
				const line = `${Ment[key]} (${Reward[key].toLocaleString()}원) - ${score[v]}개`;
				assembly.push(line);
			});
		assembly.push(`총 수익률은 ${profitRate}입니다.`);
		IO.output(assembly.join('\n\r'));
	}
}

module.exports = Prompter;
