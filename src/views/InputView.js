const console = require("@woowacourse/mission-utils").Console;

class InputView {
	#handler;
	#prompt;
	constructor(prompt, handler) {
		this.#prompt = prompt;
		this.#handler = handler;
	}
	render() {
		console.readLine(this.#prompt, this.#handler.bind(this));
	}
}

module.exports = InputView;