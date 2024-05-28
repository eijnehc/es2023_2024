const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

arr.map((x) => x ** 2); // [1,  4,  9,  16, 25, 36, 64, 81, 100]

function* map(iterable, mapperFn) {
  for (const item of iterable) {
    yield mapperFn(item);
  }
}

const iter = map(arr, (x) => x ** 2);

console.log([...iter]); // [1,  4,  9,  16, 25, 36, 64, 81, 100]

//////////////////////
// alternative

// Eagerly calculate
const iterHelperEager = arr.values().map((x) => x ** 2);

// lazily calculate
const iterHelper = arr.values().map((x) => x ** 2);

[...iterHelper];
