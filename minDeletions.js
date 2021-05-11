var minDeletions = function(s) {
    let dict = {};
    let letter;
    let letter2;
    let num = {};
    let count = 0;
    for (letter of s) {
        dict[letter] || (dict[letter] = 0);
        dict[letter] = dict[letter] + 1;
    }
    for (letter2 in dict) {
        let freqNum = dict[letter2];
        //console.log(freqNum)
        let countFreqNum = dict[letter2];
        num[freqNum] || (num[freqNum] = 0);
        if (num[freqNum] >= 1) {
            while (num[countFreqNum] >= 1 && countFreqNum > 0) {
                countFreqNum = countFreqNum - 1;
            }
            num[countFreqNum] || (num[countFreqNum] = 0);
            num[countFreqNum] = num[countFreqNum] + 1;
            count = count + (freqNum-countFreqNum)
        }
        else {
            num[freqNum] = num[freqNum] + 1;
        }    
    }
    return count;
};
