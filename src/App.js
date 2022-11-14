const utils = require("./utils");
const Constant = require("./Constant");

class App {
  #price; // 로또 구입금액
  #lottoNumber; // 구입 로또 갯수

  constructor() {
    this.#price = 0;
    this.#lottoNumber = 0;
  }

  play() {
    this.#price = utils.scan(Constant.MESSAGE.GAME_START_MSG);
    this.#lottoNumber = this.#getLottoNumber();
    if(this.#lottoNumber === -1){
      throw Error();
    }

    utils.print(this.#lottoNumber+"개를 구매했습니다.");

  }

  /***
   * @returns {number}
   * 사용자가 입력한 구입금액이 1000원 단위라면 price/1000을 return
   * 아니라면 -1을 return하는 함수
   */
  #getLottoNumber(){
    if(this.#price % 1000 === 0){
      return this.#price / 1000;
    }
    return -1;
  }


}

module.exports = App;
