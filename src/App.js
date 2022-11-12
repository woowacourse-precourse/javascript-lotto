const MissionUtils = require('@woowacourse/mission-utils')

class App {
    money=0
    lottoCount = 0
    userLottoNumbers = []
    winningNumbers = []
    bonusNumber
    rank = [0, 0, 0, 0, 0]
    prizeMoney=[2000000000, 1500000, 50000, 5000, 30000000]
    rateOfReturn=0;

    constructor() {}

    play() {
        this.insertMoney()
    }

    insertMoney() {
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
            this.money=answer
            this.lottoCount = this.lottoPurchaseCount(this.money)
            this.lottoCountPrint(this.lottoCount)
            this.makeLottoNumber()
        })
    }

    lottoPurchaseCount(money) {
        return money / 1000
    }

    lottoCountPrint(number) {
        MissionUtils.Console.print(number + '개를 구매했습니다.')
    }

    makeLottoNumber() {
        for (let i = 0; i < this.lottoCount; i++) {
            const numbers = this.lottoNumberSort(
                MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
            )
            this.lottoNumberPrint(numbers)
            this.userLottoNumbers.push(numbers)
        }
        this.winningNumberInput()
    }

    lottoNumberPrint(numbers) {
        MissionUtils.Console.print('[' + numbers.join(', ') + ']')
    }

    lottoNumberSort(numbers) {
        function compareNumbers(a, b) {
            return a - b
        }

        return numbers.sort(compareNumbers)
    }

    winningNumberInput() {
        MissionUtils.Console.readLine(
            '당첨 번호를 입력해 주세요.',
            (answer) => {
                this.winningNumbers = answer.split(',')
                this.BonusNumberInput()
            }
        )
    }

    BonusNumberInput() {
        MissionUtils.Console.readLine(
            '보너스 번호를 입력해 주세요.',
            (answer) => {
                this.bonusNumber = Number(answer)
                this.putWinNumToArray()
            }
        )
    }

    winningCount(order) {
        return this.userLottoNumbers[order].filter((lotto) =>
            this.winningNumbers.includes(String(lotto))
        ).length
    }

    putWinNumToArray() {
        for (let i = 0; i < this.userLottoNumbers.length; i++) {
            if (
                this.winningCount(i) === 5 &&
                this.userLottoNumbers.includes(this.bonusNumber)
            ) this.rank[4] += 1
            if (this.winningCount(i) > 2)
              this.rank[6-this.winningCount(i)]+=1
        }
        this.calculationOfEarnings();
    }

    calculationOfEarnings(){
      for(let i=0; i<this.rank.length; i++){
        this.rateOfReturn += this.rank[i]*this.prizeMoney[i];
      }
      this.rateOfReturn=this.rateOfReturn/this.money*100;
      this.winningStatistics();
    }

    winningStatistics(){
      MissionUtils.Console.print("당첨 통계\n---");
      MissionUtils.Console.print("3개 일치 (5,000원) - " + this.rank[3]+"개");
      MissionUtils.Console.print("4개 일치 (50,000원) - " + this.rank[2]+"개");
      MissionUtils.Console.print("5개 일치 (1,500,000원) - " + this.rank[1]+"개");
      MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+ this.rank[4]+"개");
      MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+ this.rank[0]+"개");
      MissionUtils.Console.print("총 수익률은 "+this.rateOfReturn+"%입니다.")
    }

}

const app = new App()
app.play()
module.exports = App
