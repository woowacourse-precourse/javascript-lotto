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
        this.checkRank(this.resultList);
      }
    
    //feature 3  
    checkRank(resultList){//[3,4,5,5(+보너스),6]
      this.rankList = [0, 0, 0, 0, 0];
      for(let k = 0; k < resultList.length; k++){
        if (resultList[k] === 7) this.rankList[3] += 1;  //보너스 포함 5개 일치
        else if (resultList[k] === 6) this.rankList[4] += 1; //6개 일치 
        else if (resultList[k] === 5) this.rankList[2] += 1;
        else if (resultList[k] === 4) this.rankList[1] += 1;
        else if (resultList[k] === 3) this.rankList[0] += 1;
      }
    }


    
      

}

module.exports = CompareLotto;