var canConstruct = function(ransomNote, magazine) {
    let i;
    let dict = {};
    for (i of magazine) {
        dict[i] || (dict[i] = 0);
        dict[i] = dict[i] + 1;
    }
    for (i of ransomNote) {
        if (dict[i] == null || dict[i] == 0) {
            return false;
        }
        else {
            dict[i] = dict[i] - 1;
        }
    }
    return true;
};
