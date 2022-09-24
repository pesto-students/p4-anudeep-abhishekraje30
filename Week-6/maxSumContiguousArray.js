let maxSubArray = (numsArray) => {
    if (numsArray.length == 0)
        return 0;
    let maxCurrent = numsArray[0];
    let maxGlobal = numsArray[0];

    for (let i = 1; i < numsArray.length; i++) {
        maxCurrent = Math.max(numsArray[i], maxCurrent + numsArray[i]); // According to kadan's algorithm largest sum is either the current element, or the sum of the current element and the previous largest sum
        if (maxCurrent > maxGlobal) {
            // Now, we have to check if the current maximum is greater than the previous maximum subarray, and if so, the current maximum becomes the global maximum.
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal
};

console.log(maxSubArray([1, 2, 3, 4, -10])) // 10
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6