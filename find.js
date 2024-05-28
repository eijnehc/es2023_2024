const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

arr.at(0); // 1
arr.at(1); // 2
arr.at(-1); // 10

arr.find((el) => el >= 9); // 10. Traverse from left, check 9 times!
arr.findLast((el) => el >= 9); // 10. Traverse from right, check once
arr.findIndex((el) => el >= 9); // 8. Traverse from right, check once
arr.findLastIndex((el) => el >= 9); // 9. Traverse from right, check once
