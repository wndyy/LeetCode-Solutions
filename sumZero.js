var sumZero = function(n) {
    let arr = [];
    let i;
    if(n%2==1) {
        arr.push(0);
        n-1;
    }
    n = n/2;
    for(i = 1; i <= n; i++) {
        arr.push(i)
        arr.push(-(i))
    }
    return arr;
};
