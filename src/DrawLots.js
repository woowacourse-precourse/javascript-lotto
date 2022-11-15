class DrawLots{
    compare(lotto,userLotto){
        let win = 0;
        for(let index in userLotto){
            if(lotto.includes(userLotto[index])){
                win++;
            }
        } 
        return win;
    }
}
module.exports = DrawLots;