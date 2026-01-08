const repeatString = function(str, n) {
    let res = []
    if (n < 0){
        return "ERROR";
    }
    for (let i = 0; i < n; i++){
        res.push(str)
    }
    return res.join('')
};

// Do not edit below this line
module.exports = repeatString;
