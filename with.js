const todos = [
  {
    id: 1,
    todo: "buy food",
    completed: false,
  },
  {
    id: 2,
    todo: "watch movies",
    completed: true,
  },
];

// mutate
todos.find((todo) => todo.id === 1).completed = !todos.find(
  (todo) => todo.id === 1
).completed; // true

// immutable
todos.map((todo) =>
  todo.id !== 1 ? todo : { ...todo, completed: !todo.completed }
);

const idx = todos.findIndex((todo) => todo === 1);

// Create an new array, does not mutate the existing array
todos.with(idx, { ...todos.flat(0), completed: !todos.flat(0).completed });
