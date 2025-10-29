// 1 Arrays
const array1: number[] = [3, 5, 8];

console.log(array1);
console.log(array1.length);

// 2
const arrayString: string[] = ["test-1", "test-2"];
arrayString.push("test-3");

console.log(arrayString, arrayString.length);

// 3
const arrayString2: string[] = ["test-1", "test-2", "test-3"];
arrayString2.pop();

console.log(arrayString2, arrayString2.length);

// 4
const arrayOfNumbers: number[] = [];

arrayOfNumbers.push(7);
console.log(arrayOfNumbers.length);

arrayOfNumbers.push(8);
console.log(arrayOfNumbers.length);


// 1 cycle
const arrFiveNum: number[] = [3, 5, 7, 2, 8];

for (let i = 0; i < arrFiveNum.length; i++) {
    console.log(arrFiveNum[i]);
}

// 2
const arrFiveNum2: number[] = [3, 5, 7, 2, 8];
let sum: number = 0;

for (let i = 0; i < arrFiveNum2.length; i++) {
    sum += arrFiveNum2[i];
}
console.log(sum);

// 3
const arr3: number[] = [3, 5, 7];
const arrNew: number[] = [];

for (let i = 0; i < arr3.length; i++) {
    arrNew.push(arr3[i] * 2);
}
console.log(arrNew);

// 4
const arr4: number[] = [3, 5, 7];

for (let i = arr4.length - 1; i >= 0; i--) {
    console.log(arr4[i])
}