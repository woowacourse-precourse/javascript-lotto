const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getMoney(money, numbers) {
    MissionUtils.Console.readLine("🤑 구매 금액을 입력하세요: ", (money) => {
      money = Number(money);
      if (money % 1000 === 0) {
        let availableLotto = money / 1000;
        MissionUtils.Console.print(
          `구매 가능한 로또는 ${availableLotto}장입니다.`
        );
        this.getLottoNumber(numbers);
      }
    });
  }

  getLottoNumber(numbers) {
    let userLottoNumbers = [];
    MissionUtils.Console.readLine(
      "🎰 6자리 로또 번호를 입력하세요: ",
      (lottoNumber) => {
        let userLottoNumbers = lottoNumber.split(",");
        userLottoNumbers = userLottoNumbers.map((str) => Number(str));

        MissionUtils.Console.readLine(
          "🙏보너스 번호 1개를 입력하세요: ",
          (bonusNumber) => {
            userLottoNumbers.push(bonusNumber);
            console.log(`💫 사용자의 로또 번호: ${userLottoNumbers}`);

            let result = 0;
            let bonusResult = 0;

            for (let i = 0; i < userLottoNumbers.length; i++) {
              if (this.#numbers.includes(userLottoNumbers[i])) {
                result++;
              }
            }

            if (this.#numbers.includes(Number(bonusNumber))) {
              bonusResult++;
            }
            console.log(
              `일치하는 숫자는 ${result}개, 보너스 ${bonusResult}개 입니다.`
            );
            this.getLottoResult(result, bonusResult);
          }
        );
      }
    );
  }

  // 당첨 내역 출력하기
  getLottoResult(result, bonusResult) {
    let threeStrike = 0;
    let fourStrike = 0;
    let fiveStrike = 0;
    let fiveStrikeWithBonuse = 0;
    let sixStrike = 0;

    if (result === 3) {
      threeStrike++;
    } else if (result === 4) {
      fourStrike++;
    } else if (result === 5 && bonusResult === 1) {
      fiveStrikeWithBonuse++;
    } else if (result === 5) {
      fiveStrike++;
    } else if (result === 6) {
      sixStrike++;
    }
    const prizeResult = `
    ------- 추첨 결과 --------
    3개 일치 (5,000원) - ${threeStrike}개
    4개 일치 (50,000원) - ${fourStrike}개
    5개 일치 (1,500,000원) - ${fiveStrike}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveStrikeWithBonuse}개
    6개 일치 (2,000,000,000원) - ${sixStrike}개
    ------------------------
    총 수익률은 %입니다.
    `;

    return console.log(prizeResult);
  }
}

module.exports = Lotto;

const LOTTO = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
