const {Console , Random}= require("@woowacourse/mission-utils");
class App{
  constructor(){
  
  }
  play() {
    this.buy()
  }

  buy(){
    let lottoNum = 0
    Console.readLine("구입 금액을 입력해주세요.\n" , (num) => {
      lottoNum = num/1000
      this.computer(lottoNum)
    })
  }
  
}

const app = new App()
app.play()

module.exports = App;
