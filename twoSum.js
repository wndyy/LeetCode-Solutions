var twoSum = function(nums, target) {
    let i;
    let j;
    let hashMap = {}
    let sub;
    for (i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }
    for (j = 0; j < nums.length; j++) {
        sub = target - nums[j]
        if (hashMap[sub] && hashMap[sub] != j) {
            return [hashMap[sub], j]
        }
    }
};
