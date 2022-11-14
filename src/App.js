const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.userInputMoney;
  }
  play() {
    this.insertMoney();
  }

  insertMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userMoney) => {
      this.validate(userMoney);
      this.userInputMoney = userMoney;
      this.userTicketCount = this.makeUserTicket(userMoney);
      MissionUtils.Console.print(`${this.userTicketCount}개를 구매했습니다.`);
      this.totalUserTicket = this.setUserTicket(this.userTicketCount);
      this.totalUserTicket.forEach((userTickeNumber) => {
        MissionUtils.Console.print(`[${userTickeNumber.join(", ")}]`);
      });
      this.inputUserNumber(this.totalUserTicket);
    });
  }

  makeUserTicket(userMoney) {
    const ticket = userMoney / 1000;
    return ticket;
  }

  setUserTicket(userTicketCount) {
    const totalUserTicket = [];
    for (let makeTicket = 0; makeTicket < userTicketCount; makeTicket++) {
      const userTicket = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      new Lotto(userTicket);
      totalUserTicket.push(userTicket);
    }

    return totalUserTicket;
  }

  inputUserNumber(totalUserTicket) {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (userInputNumber) => {
        const checkList = userInputNumber.split(",").map((number) => +number);
        MissionUtils.Console.readLine(
          "보너스 번호를 입력해 주세요.",
          (bonusNumber) => {
            this.validate(bonusNumber);
            checkList.push(Number(bonusNumber));
            this.makeRankData(totalUserTicket, checkList);
          }
        );
      }
    );
  }

  makeRankData(totalUserTicket, checkList) {
    let bonusNumber = checkList.pop();
    const resultList = [];
    totalUserTicket.forEach((userTicket) => {
      let target = 0;
      let point = 0;
      let bonusPoint = 0;
      for (let i = 0; i < 6; i++) {
        target = checkList[i];
        if (userTicket.includes(target)) {
          point++;
        }
      }
      if (userTicket.includes(bonusNumber)) {
        bonusPoint++;
      }
      resultList.push([point, bonusPoint]);
    });

    this.saveRank(resultList);
  }

  saveRank(resultList) {
    const rankList = [0, 0, 0, 0, 0, 0];
    let secondRank = 0;
    resultList.forEach((result) => {
      let [point, bonusPoint] = result;
      if (point === 0) {
        return;
      }

      if (point === 5 && bonusPoint === 1) {
        secondRank++;
        return;
      }
      rankList[point - 1]++;
    });

    this.rankPrice(rankList, secondRank);
  }

  rankPrice(rankList, secondRank) {
    let messegeTemplate = this.rankMessege(rankList, secondRank);
    let userMoney = this.userInputMoney;
    let earnedMoney = 0;
    const prizeTable = [30000000, 0, 0, 5000, 50000, 1500000, 2000000000];

    for (let i = 3; i < 7; i++) {
      earnedMoney += prizeTable[i] * rankList[i - 1];
      if (i === 5 && secondRank !== 0) {
        earnedMoney += prizeTable[0] * secondRank;
      }
    }
    const revenue = (earnedMoney / userMoney) * 100;
    messegeTemplate += `총 수익률은 ${revenue}%입니다.`;

    MissionUtils.Console.print(messegeTemplate);
    MissionUtils.Console.close();
  }

  rankMessege(rankList, secondRank) {
    let messegeTemplate = "";
    const prizeTable = [
      "(30,000,000원)",
      0,
      0,
      "(5,000원)",
      "(50,000원)",
      "(1,500,000원)",
      "(2,000,000,000원)",
    ];

    for (let i = 3; i < 7; i++) {
      messegeTemplate += `${i}개 일치 ${prizeTable[i]} - ${
        rankList[i - 1]
      }개 \n`;
      if (i === 5 && secondRank !== 0) {
        messegeTemplate += `${i}개 일치, 보너스 볼 일치 ${prizeTable[0]} - ${secondRank}개 \n`;
      }
      if (i === 5 && secondRank === 0) {
        messegeTemplate += `${i}개 일치, 보너스 볼 일치 ${prizeTable[0]} - ${secondRank}개 \n`;
      }
    }

    return messegeTemplate;
  }

  validate(numbers) {
    if (isNaN(numbers)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
