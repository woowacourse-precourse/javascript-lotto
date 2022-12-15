const { Console } = require("@woowacourse/mission-utils"); 

const Output = {
    lottoCountPrint( count ){  //randomLotto = [[num X 6], ...]
        Console.print(`\n${count}개를 구매했습니다.`);
    },

    lottoNumPrint( randomLotto ){  
        randomLotto.sort((a,b) => a - b ) ;
        Console.print(`[${randomLotto.join(", ")}]`) ;
    },

    resultPrint([three, four, five, five_bonus, six], rate ){
        if ((rate*10)%10 == 0 ) rate = `${rate}.0`
        Console.print(`\n당첨통계\n---\n3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${five_bonus}개\n6개 일치 (2,000,000,000원) - ${six}개\n총 수익률은 ${rate}%입니다.`);
        Console.close() ;
    },

    errorPrint(errorMessage){
        Console.print(errorMessage) ;
    }

    

}

module.exports = Output ;