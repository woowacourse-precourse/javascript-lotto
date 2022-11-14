const utils = require("./utils");
const Constant = require("./Constant");
const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");


class App {
  #price; // 로또 구입금액
  #lottoNumber; // 구입 로또 갯수
  #Lotto; // 발급 받은 로또 배열
  #winnerNumber; // 당첨 번호
  #bonus; // 보너스 번호

  constructor() {
    this.#price = 0;
    this.#lottoNumber = 0;
    this.#Lotto = [];
    this.#bonus = 0;
    this.#winnerNumber = '';
  }

  play() {
    this.#price = utils.scan(Constant.MESSAGE.GAME_START_MSG);
    this.#lottoNumber = this.#getLottoNumber();
    if(this.#lottoNumber === -1){
      throw Error();
    }

    utils.print(this.#lottoNumber+"개를 구매했습니다.");
    // 로또 발급
    this.#Lotto = this.#issueLotto();

    // 당첨 번호 입력 받는 로직
    this.#winnerNumber = utils.scan(Constant.MESSAGE.LOTTO_NUMBER_INPUT).split(',');
    utils.validateLotto(this.#winnerNumber);

    // 보너스 번호 입력
    this.#bonus = utils.scan(Constant.MESSAGE.BONUS_NUMBER_INPUT);
    this.#validateBonus();

    for(let i = 0 ; i < this.#lottoNumber ; i++){
      this.#Lotto[i].calcWinning(this.#winnerNumber);
      this.#Lotto[i].match(this.#bonus);
    }
  }

  /***
   * lotto 발급하는 함수
   */
  #issueLotto(){
    // 로또 번호는 오름차순으로 정렬
    const result = [];
    for(let i = 0 ; i < this.#lottoNumber ; i++){
      let tmp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, Constant.LOTTO_LENGTH);
      tmp = tmp.sort((a,b) => utils.ascSort(a, b));
      utils.print(tmp);
      result.push(new Lotto(tmp));
    }
    return result;
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

  #validateBonus(){
    if(this.#lottoNumber.includes(this.#bonus)) throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
  }
}

module.exports = App;
