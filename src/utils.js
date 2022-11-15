const { Console, Random } = require('@woowacourse/mission-utils');

const print = (string) => {
    Console.print(string);
}

const readLine = (string, func) => {
    Console.readLine(string, func);
}

module.exports = { print, readLine };