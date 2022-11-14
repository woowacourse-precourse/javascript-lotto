const { Console } = require('@woowacourse/mission-utils');

const ui = {
  readLine(query, callback) {
    Console.readLine(query, callback);
  },

  print(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },
};

module.exports = ui;
