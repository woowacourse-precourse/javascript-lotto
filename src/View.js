const Console = require("@woowacourse/mission-utils").Console;

class View {
	#handler;
	#prompt;
	constructor(prompt, handler) {
		this.#prompt = prompt;
		this.#handler = handler;
	}
	render() {
		Console.readLine(this.#prompt, this.#handler.bind(this));
	}
	static close() {
		Console.close();
	}
}

function printPurchase(data) {
	Console.print(`${data.length}개를 구매했습니다.`);
	Console.print(data.map((item) => `[${item.join(", ")}]`).join("\n") + "\n");
}

function printResult(data, profitRate) {
	Console.print("당첨 통계\n---");
	const result = data
		.sort((a, b) => a.score - b.score)
		.map(({count, price, score}) =>
			`${score === 5.5 ? `5개 일치, 보너스 볼 일치` : `${score}개 일치`} (${price.toLocaleString('ko-KR')}원) - ${count}개`);
	result.push(`총 수익률은 ${profitRate}%입니다.`);
	Console.print(result.join("\n"));
}

module.exports = {printPurchase, printResult, View};