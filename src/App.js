const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.initialAmount = 0;
        this.lottoNumbers = []; // 생성한 로또 번호 객체를 저장하는 배열.
        this.winningNumbers = []; // 당첨 번호 집합.
        this.bonusNumber = 0; // 보너스 번호
        this.winningInfo = {
            // 당첨 정보
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
        };
    }

    // 입력한 금액이 1,000으로 나누어 떨어지지 않으면 예외처리를 한다.
    amountValidate(amount) {
        if (amount % 1000 !== 0) {
            throw new Error(
                '[ERROR] 1,000으로 나누어 떨어지는 금액만 입력해야 합니다.'
            );
        }
    }

    // 금액을 1,000으로 나눈 횟수 만큼의 로또 번호를 생성하고 저장한다.
    generateLotto(amount) {
        const COUNT = parseInt(amount / 1000);
        for (let i = 0; i < COUNT; i++) {
            const genNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6
            );
            this.lottoNumbers.push(new Lotto(genNumbers));
        }
    }

    // 발행한 로또 번호의 개수와, 번호들을 오름차순으로 정렬해서 콘솔에 출력한다.
    getInfo() {
        const LOTTO_COUNT = this.lottoNumbers.length;
        MissionUtils.Console.print(`${LOTTO_COUNT}개를 구매했습니다.\n`);
        for (let lottoNumber of this.lottoNumbers) {
            MissionUtils.Console.print(lottoNumber.printNumbers());
        }
        MissionUtils.Console.print('');
    }

    // 입력 받은 당첨 번호의 유효성 검사.
    validateWinning(winningNum) {
        new Lotto(winningNum);
    }

    // 보너스 번호의 유효성 검사.
    validateBonus(bonusNum) {
        if (!bonusNum) {
            throw new Error('[ERROR] 숫자 하나만 입력하세요');
        }
        if (bonusNum < 1 || bonusNum > 45) {
            throw new Error(
                '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
            );
        }
    }

    // 당첨 번호를 입력받고 배열로 변환해서 저장한다.
    getWinningNums() {
        MissionUtils.Console.readLine(
            '당첨 번호를 입력해 주세요.\n',
            (winningString) => {
                const inputWinning = winningString.split(',');
                this.validateWinning(inputWinning);
                this.winningNumbers = inputWinning;
                MissionUtils.Console.print('');
                this.getbounsNum();
            }
        );
    }

    // 보너스 번호를 입력받는다.
    getbounsNum() {
        MissionUtils.Console.readLine(
            '보너스 번호를 입력해 주세요.\n',
            (numberString) => {
                const newBonus = Number(numberString);
                this.validateBonus(newBonus);
                this.bonusNumber = newBonus;
                MissionUtils.Console.print('');
                this.printWinningInfo();
            }
        );
    }

    // 당첨 내역을 출력한다.
    printWinningInfo() {
        for (const lottoNums of this.lottoNumbers) {
            const winningAmount = lottoNums.getWinningMoney(
                this.winningNumbers,
                this.bonusNumber
            );
            this.updateWinningInfo(winningAmount);
        }
        MissionUtils.Console.print('당첨 통계\n---');
        MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${this.winningInfo.fifth}개`
        );
        MissionUtils.Console.print(
            `4개 일치 (50,000원) - ${this.winningInfo.fourth}개`
        );
        MissionUtils.Console.print(
            `5개 일치 (1,500,000원) - ${this.winningInfo.third}개`
        );
        MissionUtils.Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningInfo.second}개`
        );
        MissionUtils.Console.print(
            `6개 일치 (2,000,000,000원) - ${this.winningInfo.first}개`
        );
        this.printEarningRatio();
    }

    // 금액을 확인하고 당첨 내역을 업데이트 한다.
    updateWinningInfo(winningAmount) {
        switch (winningAmount) {
            case 2000000000:
                this.winningInfo.first++;
                break;
            case 30000000:
                this.winningInfo.second++;
                break;
            case 1500000:
                this.winningInfo.third++;
                break;
            case 50000:
                this.winningInfo.fourth++;
                break;
            case 5000:
                this.winningInfo.fifth++;
        }
    }

    // 수익률을 구하고 출력한다.
    printEarningRatio() {
        const objVal = Object.values(this.winningInfo);
        let cumulativeAmount = 0;
        cumulativeAmount += this.winningInfo.first * 2000000000;
        cumulativeAmount += this.winningInfo.second * 30000000;
        cumulativeAmount += this.winningInfo.third * 1500000;
        cumulativeAmount += this.winningInfo.fourth * 50000;
        cumulativeAmount += this.winningInfo.fifth * 5000;
        const tempRatio = (cumulativeAmount / this.initialAmount) * 100;
        const earningRatio = Math.round(tempRatio * 10) / 10;
        MissionUtils.Console.print(`총 수익률은 ${earningRatio}%입니다.`);
        MissionUtils.Console.close();
    }

    play() {
        MissionUtils.Console.readLine(
            '구입금액을 입력해 주세요.\n',
            (amount) => {
                this.initialAmount = amount;
                this.amountValidate(amount);
                this.generateLotto(amount);
                this.getInfo();
                this.getWinningNums();
            }
        );
    }
}

module.exports = App;
