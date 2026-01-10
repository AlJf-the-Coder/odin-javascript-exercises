const palindromes = function (str) {
    const cleanString = str.split('')
                          .filter(c => {
                            // check if alphanumeric
                            const code = c.charCodeAt(0);
                            return (code > 47 && code < 58) ||
                                (code > 64 && code < 91) ||
                                (code > 96 && code < 123);
                          })
                          .map(c => c.toLowerCase())
    let l = 0,
        r = cleanString.length - 1;
    while (l < r){
        if (cleanString[l] != cleanString[r]) return false;
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
