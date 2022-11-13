
const changePrintFormat = () => {
  String.prototype.format = function() {
    return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
  };
}

module.exports = { changePrintFormat };
   