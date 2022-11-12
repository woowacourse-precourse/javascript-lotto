const MissionUtils= require("@woowacourse/mission-utils");

class Calculator{

    createLottoNumber(count){
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
    calWinning(arr,number){
        let result=[];
        for(let index=0;index<arr.length;index++){
            result.push(arr[index].filter(x => number.includes(x)));
        }
        return result;
    }

    winningScore(result,arr,number){
        let count=new Array(result.length).fill(0);
        for(let index=0;index<result.length;index++){
            if(result[index].length==6){
                count[7]+=1;
            }
            else if(result[index].length==5&&arr[i].includes(number)){
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

    calYield(arr,count){
        let earnMoney=arr[3]*5000+arr[4]*50000+arr[5]*1500000+arr[7]*30000000+arr[6]*2000000000;
        let lottoYield=((earnMoney/(count*1000)*100));
        return lottoYield;
    }


}
module.exports=Calculator;