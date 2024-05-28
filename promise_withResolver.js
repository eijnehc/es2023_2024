const testedPromise = new Promise((resolve, reject) => {});

const { promise, resolve, reject } = Promise.withResolvers();
onclick(resolve);
