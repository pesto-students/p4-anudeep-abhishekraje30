const findPair = (arr, diff) => {
    arr.sort((a,b) => a-b);
    let i = 0, j = 1;
    while(i < arr.length && j < arr.length) {
        if(i !== j && arr[j] - arr[i] === diff) {
            return 1;
        } else if (arr[j] - arr[i] < diff) {
            j++;
        } else {
            i++;
        }
    }
    return 0;
}

console.log(findPair([5, 10, 3, 2, 50, 80], 78)) // 1
