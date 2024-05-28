// mock service from external service
const sendLog = (...arg) => console.log(...args);

async function fetchStuff() {
  await fetch("http://doesnt.exist/stuff").catch((err) => {
    sendLog(err);
    throw new Error("Loading stuff failed", { cause: err }); // new property: cause
  });
}
