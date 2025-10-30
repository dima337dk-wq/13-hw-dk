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

// ТИПОВЫЕ ЗАДАЧИ С СОБЕСЕДОВАНИЙ, array 1

const arraySecondTask: number[] = [3, 5, 7, 8, 22, 4, 9];

let numST = arraySecondTask[0]

for (let i = 0; i < arraySecondTask.length; i++) {
    if (numST < arraySecondTask[i]) {
        numST = arraySecondTask[i]
    }
}
console.log(numST)

// 2

const arraySecondTask2: number[] = [3, 5, 7, 8, 22, 4, 9];

let numST2 = arraySecondTask2[0]

for (let i = 0; i < arraySecondTask2.length; i++) {
    if (numST2 > arraySecondTask2[i]) {
        numST2 = arraySecondTask2[i]
    }
}
console.log(numST2)

// 3

const arraySecondTask3: number[] = [3, 5, 7, 8, 22, 4, 9];

let numST3 = 0

for (let i = 0; i < arraySecondTask3.length; i++) {
    if (arraySecondTask3[i] % 2 === 0) {
        numST3 += 1
    }
}
console.log(numST3)

// 4

const arraySecondTask4: number[] = [3, -5, 7, -8, 22, -4, 9];

let arrayST4:number [] = []

for (let i = 0; i < arraySecondTask4.length; i++) {
    if (arraySecondTask4[i] > 0) {
        arrayST4.push(arraySecondTask4[i])
    }
}
console.log(arrayST4)