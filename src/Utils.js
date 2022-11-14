class Utils {
  static transformArrayToString(array, separator = ", ") {
    return `[${array.join(separator)}]`;
  }

  static transformStringToNumberArray(string, separator = ",") {
    return string.split(separator).map((number) => parseInt(number, 10));
  }

  static intersect(setA, setB) {
    if (!setA instanceof Set || !setB instanceof Set) {
      throw new Error("[ERROR] params is not Set instance.");
    }
    return new Set([...setA].filter((x) => setB.has(x)));
  }

  static createCounter(array) {
    return array.reduce((counter, item) => {
      if (!counter[item]) {
        counter[item] = 0;
      }
      counter[item] += 1;
      return counter;
    }, {});
  }

  static formatNumber(number, maximumFractionDigits = 0) {
    return number.toLocaleString("ko-KR", {
      maximumFractionDigits,
    });
  }

  static formatProfit(profit) {
    const formattedProfit = Utils.formatNumber(profit, 1);
    return !formattedProfit.includes(".")
      ? `${formattedProfit}.0`
      : formattedProfit;
  }
}

module.exports = Utils;
