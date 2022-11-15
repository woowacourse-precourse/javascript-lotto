class Message{
  #message

  constructor(quantity, createdLottoList, numbers, bonus){
    this.makeMessage(quantity, createdLottoList, numbers, bonus);
  }

  getMessage(){
    return this.#message;
  }

  makeWinInfo(createdLottoList, numbers, bonus){
    const winInfo = Array.from({length: 5}, () => 0);
    const winCount = createdLottoList.map(lotto => lotto.filter(number => numbers.includes(number)).length);
    const hasBonus = createdLottoList.map(lotto => lotto.filter(number => number === parseInt(bonus)).length)[0];

    for (let i = 0; i < winCount.length; i++) {
      if (winCount[i] === 3) winInfo[0] += 1;
      if (winCount[i] === 4) winInfo[1] += 1;
      if (winCount[i] === 5 && hasBonus === 0) winInfo[2] += 1;
      if (winCount[i] === 5 && hasBonus === 1) winInfo[3] += 1;
      if (winCount[i] === 6) winInfo[4] += 1;
    }
    return winInfo;
  }

  calRateOfReturn(quantity, sum){
    return ((100 / quantity) * (sum / 1000)).toFixed(1); 
  }

  makeMessage(quantity, createdLottoList, numbers, bonus){
    const MONEY_UNITS = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
    const winInfo = this.makeWinInfo(createdLottoList, numbers, bonus);
    let message = "당첨 통계 \n---\n";
    let sum = 0;
    for (let i = 0; i<5; i++){
      message += (i > 2) ? `${i+2}개 일치` : `${i+3}개 일치`;
      message += (i === 3) ? `, 보너스 볼 일치` : "";
      message += ` (${MONEY_UNITS[i]}원) - ${winInfo[i]}개\n`;
      sum += parseInt(MONEY_UNITS[i].replace(/,/g, "")) * winInfo[i];
    }
    message += `총 수익률은 ${this.calRateOfReturn(quantity, sum)}%입니다.`;
    this.#message = message;
  }
}

module.exports = Message;