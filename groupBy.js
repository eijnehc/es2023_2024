let people = [
  { name: "Alice", specialization: "frontend", active: true },
  { name: "Bob", specialization: "backend", active: false },
  { name: "Cecile", specialization: "devops", active: true },
  { name: "Dan", specialization: "frontend", active: false },
  { name: "Elijah", specialization: "backend", active: true },
];

Object.groupBy(people, ({ specialization }) => specialization);
Object.groupBy(people, (item) => `active:${item.active}`);

let peopleSet = new Set([
  { name: "Alice", specialization: "frontend", active: true },
  { name: "Bob", specialization: "backend", active: false },
  { name: "Cecile", specialization: "devops", active: true },
  { name: "Dan", specialization: "frontend", active: false },
  { name: "Elijah", specialization: "backend", active: true },
]);

peopleSet[Symbol.iterator]();

Object.groupBy(peopleSet, ({ specialization }) => specialization);

function* peopleGenerator() {
  yield { name: "Alice", specialization: "frontend", active: true };
  yield { name: "Bob", specialization: "backend", active: false };
  yield { name: "Cecile", specialization: "devops", active: true };
  yield { name: "Dan", specialization: "frontend", active: false };
  yield { name: "Elijah", specialization: "backend", active: true };
}

Object.groupBy(peopleGenerator(), ({ specialization }) => specialization);
