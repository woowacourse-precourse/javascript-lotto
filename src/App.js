const Input = require('./Input');

class App {
    play() {
        const input = new Input();
        input.process();
    }
}

const app = new App();
app.play();

module.exports = App;
