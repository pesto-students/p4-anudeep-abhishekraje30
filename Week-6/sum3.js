// Function to return the sum of a
// triplet which is closest to x
function sum3(arr, x) {

    // Sort the array
    arr.sort((a, b) => a - b);


    let closestSum = 1000000000;

    // Fix the smallest number among
    // the three integers
    for (let i = 0; i < arr.length - 2; i++) {

        // Two pointers initially pointing at
        // the last and the element
        // next to the fixed element
        let ptr1 = i + 1, ptr2 = arr.length - 1;

        // While there could be more pairs to check
        while (ptr1 < ptr2) {

            // Calculate the sum of the current triplet
            let sum = arr[i] + arr[ptr1] + arr[ptr2];

            // If the sum is more closer than
            // the current closest sum
            if (Math.abs(1 * x - sum) < Math.abs(1 * x - closestSum)) {
                closestSum = sum;
            }

            // If sum is greater than x then decrement
            // the second pointer to get a smaller sum
            if (sum > x) {
                ptr2--;
            }

            // Else increment the first pointer
            // to get a larger sum
            else {
                ptr1++;
            }
        }
    }

    // Return the closest sum found
    return closestSum;
}

// Driver code
let arr = [-1, 2, 1, -4];
let x = 1;
console.log(sum3(arr, x)); //2


