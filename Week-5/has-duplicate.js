const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([1,1,2,3,5,5]))