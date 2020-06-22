// let array: number[] = [8, 3, 1]
let array: number[] = [10, 20, 17, 22];
// let array: number[] = [3, 1, 2]
// let array: number[] = [101, 102, 103, 104]

// let array: number[] = []

let max: number = 22;
let missing = new Array(...array);

for (let i = 10; i <= max; i++) {
  if (array.indexOf(i) == -1) {
    missing.push(i);
    missing.sort();
  } else if (array === []) {
    missing;
  } else {
    missing.sort();
  }
}

console.log(missing);
