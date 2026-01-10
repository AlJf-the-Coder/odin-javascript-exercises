const fibonacci = function(n) {
    if (n < 0) return 'OOPS';

    if (typeof n != "number" &&
        (n === '' || typeof n != "string")){
        return 'OOPS'
    }
    n = +n;
    
    if (!Number.isInteger(n)) return;

    const fib = [0, 1];
    while (fib.length <= n){
        fib.push(fib.at(-1) + fib.at(-2));
    }
    return fib[n];

};

// Do not edit below this line
module.exports = fibonacci;
