sortAscending = (array) => {
    array.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
}

roundToTwo = (num) => {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

module.exports = {sortAscending, roundToTwo}