const MissionUtils = require("@woowacourse/mission-utils");
const Exceptions = require("./domain/Exception");
const ResultLotto = require("./domain/ResultLotto");
let exception = new Exceptions();
let resultLotto = new ResultLotto();
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.price = 0;
    this.lottoCount = 0;
    this.bonusNumber = 0;
    this.myLottos = [];
    if(numbers !== undefined) exception.checkInputCount(numbers);
    if(numbers !== undefined) exception.checkInputDuplicate(numbers);
  }

  // TODO: 추가 기능 구현
  getLotto() {
    MissionUtils.Console.readLine("구입 금액 입력.", (pay) => {
      exception.checkInputNotNumber(pay);
      exception.checkPriceNotThousands(pay);
      this.price = Number(pay);
      this.lottoCount = this.price / 1000;
      MissionUtils.Console.print(`${this.lottoCount}개를 구매했습니다.`);
      this.printLotto(this.lottoCount);
      this.getLottoNumbers();
    });
  }

  printLotto(lottoCount) {
    for (let index = 0; index < lottoCount; index++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((first, second) => first - second);
      this.myLottos.push(lotto);
      let strLotto = `[${String(lotto).replace(/,/g, ", ")}]`
      MissionUtils.Console.print(strLotto);
    }
  }

  getLottoNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.",(lottoNumbers) => {
        this.#numbers = lottoNumbers.split(",").map((element) => Number(element));
        exception.checkInputCount(this.#numbers);
        this.#numbers.map((element) => {
          exception.checkInputNotNumber(element);
        });
        exception.checkInputDuplicate(this.#numbers);
        this.#numbers.map((element) => {
          exception.checkInputRange(element);
        });
        this.getBonusNumbers();
      }
    );
  }

  getBonusNumbers() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonusNumber) => {
        this.bonusNumber = Number(bonusNumber);
        exception.checkInputNotNumber(this.bonusNumber);
        exception.checkInputRange(this.bonusNumber);
        exception.checkBonusInLotto(this.bonusNumber, this.#numbers);
        this.myLottos.map((element)=>{
          resultLotto.matchLotto(element,this.#numbers,this.bonusNumber)
        })
        resultLotto.printResult();
        resultLotto.earningsRate(this.price);
      }
    );
  }
}

module.exports = Lotto;
