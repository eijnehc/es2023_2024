let sABC = new Set(["A", "B", "C"]);

let sCDE = new Set(["C", "D", "E"]);

sABC.union(sCDE); // {'A', 'B', 'C', 'D', 'E'}

sABC.intersection(sCDE); // {'C'}

sABC.difference(sCDE); // {'A', 'B'}

sABC.symmetricDifference(sCDE); // {'A', 'B', 'D', 'E'}

sABC.isDisjointFrom(sCDE); // false

sABC.isDisjointFrom(new Set(["D", "E"])); // true

sABC.isSubsetOf(sCDE); // false

sABC.isSupersetOf(sCDE); // false

sABC.isSupersetOf(new Set(["A"])); // true

let obj1 = {};
let obj2 = {};

let set01 = new Set([obj1]);

set01.intersection(new Set([{}])); // false
