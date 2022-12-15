const LottoGame = require("./LottoGame") ;

class App{
    play(){
        const lottoGame = new LottoGame() ;
        lottoGame.requestMoney()
    }
}

const app = new App();
app.play() ;

module.exports = App ;