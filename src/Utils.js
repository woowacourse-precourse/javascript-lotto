const { Console, Random } = require("@woowacourse/mission-utils");

class Utils {
    static readLine(query, callback){
        Console.readLine(query, callback);
    }

    static print(message){
        Console.print(message);
    }

    static close(){
        Console.close();
    }

    static pickNumberInLotto(){
        return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }
}

module.exports = Utils;