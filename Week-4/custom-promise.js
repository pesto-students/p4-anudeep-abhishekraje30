const promiseState = {
  pending: "pending",
  resolved: "resolved",
  rejected: "rejected",
};
class CustomPromise {
  constructor(handlerFunc) {
    this.promiseState = promiseState.pending;
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFunc = null;
    this.catchFunc = null;
    handlerFunc(this.resolver, this.rejector);
  }

  resolver(resolvedData) {
    if (this.promiseState === promiseState.pending) {
      this.thenFunc && this.thenFunc(resolvedData);
    }
    this.promiseState = promiseState.resolved;
  }

  rejector(rejectedData) {
    if (this.promiseState === promiseState.pending) {
      this.catchFunc && this.catchFunc(rejectedData);
    }
    this.promiseState = promiseState.rejected;
  }

  then(thenFunc) {
    this.thenFunc = thenFunc;
    return this;
  }

  catch(catchFunc) {
    this.catchFunc = catchFunc;
    return this;
  }
}

const text = document.getElementById("text");
const button = document.getElementById("button");

const getNumber = () => {
  new CustomPromise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 20);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with number: ${randomNumber}`);
      }
      res(`Resolved with number: ${randomNumber}`);
    }, randomNumber * 10);
  });
};



const display = (content) => {
  text.innerText = content;
};

const clickHandler = () => {
  display("Loading...");
  const numberPromise = getNumber();
  numberPromise.then(display).catch(display);
};

button.addEventListener("click", clickHandler);
