await Promise.any([Promise.resolve(125)]);

await Promise.allSettled([Promise.resolve(125)]);

const fulfill = (value, time) =>
  newPromise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });

const reject = (value, time) =>
  newPromise((resolve, reject) => {
    setTimeout(() => reject(value), time);
  });

await fulfill("success!", 1000); // 'success!'
await reject("kaboom!", 2000); // Uncaught error kaboom!

const p1 = fulfill("success!", 1000); // 'success!'
const p2 = reject("kaboom!", 2000); // Uncaught error kaboom!

await Promise.all([p1, p2]); // Uncaught error kaboom!
await Promise.race([p1, p2]); // 'success!'
await Promise.any([p1, p2]); // 'success!'
await Promise.allSettled([p1, p2]); // [{ status: "fulfilled", value: "success" }, { status: "rejected", value: "kaboom!" }];
