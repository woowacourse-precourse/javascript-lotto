class CompareLotto{

    constructor(ticketList, winningNum, bonusNum){
        this.ticketList = ticketList;
        this.winningNum = winningNum;
        this.bonusNum = bonusNum;
        //if(ticketList === undefined) throw new Error("[ERROR] CompareLotto 클래스로 값이 넘어오지 않았습니다.");

        this.compareLottery()
    }
    //feature 2
    compareLottery(){
        this.resultList = [];
        for(let i = 0; i < this.ticketList.length; i++){
          let temp = this.ticketList[i].filter((item) => this.winningNum.includes(item));
          if (temp.length === 5 && this.ticketList[i].includes(this.bonusNum)) temp.push(this.bonusNum, this.bonusNum);
          this.resultList.push(temp.length);//5개 일치 + 보너스 는 길이를 7로 해서 전달
        }
        //this.checkRank(this.resultList);
      }

    
      

}

module.exports = CompareLotto;