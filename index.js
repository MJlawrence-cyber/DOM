const complexObject = {
  string: "Hello, World!",
  number: 42,
  boolean: true,
  nullValue: null,
  undefinedValue: undefined,
  array: [1, "two", { nestedObject: { key: "value" } }, true],
  object: {
    key1: "value1",
    key2: 123,
    key3: ["apple", "banana", "cherry"],
  },
  functionValue: function (a, b) {
    return a + b;
  },
  dateObject: new Date(),
  regex: /pattern/,
  map: new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]),
  set: new Set([1, 2, 3, 4, 5]),
};

console.log(complexObject.array[2].nestedObject.key);
console.log(complexObject.object.key3[2]);
console.log(complexObject.functionValue(4, 7));

//1. for loop
//**initialization, condition, iteration***//
for (let i = 0; i < 20; i++) console.log(i);

for (let i = 2; i < 20; i++) {
  let count = i * 2;
  console.log(count);
}

for (i = 1; i < 20; i++) {
  console.log(`2 X ${i} = ${i * 2}`);
}
function FizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(FizzBuzz(3));
