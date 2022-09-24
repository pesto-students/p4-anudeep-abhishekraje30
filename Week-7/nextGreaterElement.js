
const printNextGreaterElement = (arr, n) => {
    let s = [];

    /* push the first element to stack */
    s.push(arr[0]);

    // iterate for rest of the elements
    for (let i = 1; i < n; i++) {

        if (s.length == 0) {
            s.push(arr[i]);
            continue;
        }

        /* if stack is not empty, then
        pop an element from stack.
        If the popped element is smaller
        than next, then
        a) print the pair
        b) keep popping while elements are
        smaller and stack is not empty */
        while (s.length == 0 == false
            && s[s.length - 1] < arr[i]) {
            console.log(s[s.length - 1]
                + " --> " + arr[i] + "\n");
            s.pop();
        }

        /* push next to stack so that we can find
        next greater for it */
        s.push(arr[i]);
    }

    /* After iterating over the loop, the remaining
    elements in stack do not have the next greater
    element, so print -1 for them */
    while (s.length != 0) {
        console.log(s[s.length - 1] + " --> " + -1 + "\n");
        s.pop();
    }
}

/* Driver code */
let arr = [11, 13, 21, 3];
let n = arr.length;
printNextGreaterElement(arr, n);

