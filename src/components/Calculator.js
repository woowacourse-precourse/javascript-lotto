const MissionUtils= require("@woowacourse/mission-utils");
const Input = require("./Input.js");


class Calculator{

    createLottoNumber(count){
        let input=new Input();
        let lottoNumber=[];
        while(lottoNumber.length<count){
            lottoNumber.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
        }
        let arr=Object.keys(lottoNumber).map(item=>lottoNumber[item]);
        for(let i=0;i<lottoNumber.length;i++){
            MissionUtils.Console.print(`[${arr[i][0]}, ${arr[i][1]}, ${arr[i][2]}, ${arr[i][3]}, ${arr[i][4]}, ${arr[i][5]}]`)
        }
        return lottoNumber;
    }
    calWinning(lottoArr,winNumber){
        let result=[];
        for(let index=0;index<lottoArr.length;index++){
            result.push(lottoArr[index].filter(x => winNumber.includes(x)));
        }
        return result;
    }

    winningScore(result,lottoArr,bonusNumber){
        let count=new Array(result.length).fill(0);
        for(let index=0;index<result.length;index++){
            if(result[index].length==6){
                count[7]+=1;
            }
            else if(result[index].length==5&&lottoArr[i].includes(bonusNumber)){
                count[6]+=1;
            }
            else if(result[index].length==5){
                count[5]+=1;
            }
            else if(result[index].length==4){
                count[4]+=1;
            }
            else if(result[index].length==3){
                count[3]+=1;
            }
        }
        return count;
        }

    calYield(winningArr,moneycount){
        let earnMoney=winningArr[3]*5000+winningArr[4]*50000+winningArr[5]*1500000+winningArr[7]*30000000+winningArr[6]*2000000000;
        let lottoYield=((earnMoney/(moneycount*1000)*100));
        return lottoYield;
    }


}
module.exports=Calculator;