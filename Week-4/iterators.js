const fibonacci = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let oldNum = 0,
      newNum = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [oldNum, newNum] = [newNum, (oldNum + newNum) || 1];
          return { value: oldNum, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

for (let num of fibonacci(6)) {
  console.log(num);
}
