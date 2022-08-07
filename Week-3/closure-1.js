function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// result: Count is 0

// Reason:

// The "message" is outside the increment function. That's why it has a fixed value of count i.e "zero {0}". Even if increment is called it does not have a relation with "message"
// To improve this we can define "message" inside the increment function
