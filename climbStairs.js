var climbStairs = function(n) {
    let i = 0;
    let j = 1;
    for (let k = 0; k < n; k++) {
        let tmp = i;
        i = j;
        j += tmp;
    }
    return j;
};
