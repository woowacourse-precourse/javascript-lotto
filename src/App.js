let PrintLotto = require("./PrintLotto");

class App {
	play() {
		let printLotto = new PrintLotto();
		printLotto.inputPayment();
	}
}

const app = new App();
app.play();

module.exports = App;
