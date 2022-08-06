const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    console.log(cache);
    if (cache.has(key)) {
      return cache.get(key);
    }

    cache.set(key, func(...args));
    return cache.get(key);
  };
};

const add = (a, b) => {
  return a + b;
};

// calculateTime function calculates time taken for process and to know the differece between caching and normal approach
const calculateTime = (func) => {
  console.time();
  console.log(func());
  console.timeEnd();
};

const memoizeAdd = memoize(add);

calculateTime(() => memoizeAdd(500, 300));
calculateTime(() => memoizeAdd(100, 200));
calculateTime(() => memoizeAdd(100, 100));
calculateTime(() => memoizeAdd(100, 100));
calculateTime(() => memoizeAdd(500, 300));
