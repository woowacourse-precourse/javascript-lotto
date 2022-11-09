class Stat {
    constructor(lotto , winNum , bonus){
        this.LOTTO = lotto
        this.WIN_NUM = winNum
        this.BONUS = bonus
    }
    
    checkMatch(){
        console.log('################################')
        console.log(this.LOTTO)
        console.log(this.WIN_NUM)
        console.log(this.BONUS)
    }
}


module.exports = Stat;