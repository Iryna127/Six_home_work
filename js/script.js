//First
const mainArray = [];
function newArray() {
  for (let i = 0; i < 15; i++) {
    mainArray.push(Math.floor(Math.random() * 20));
  }
  return mainArray;
}
newArray();
console.log(mainArray);

//Second
const divOnThreeArray = mainArray.filter((value) => value % 3 === 0);
console.log(divOnThreeArray);

//Third
let result = mainArray.find((element) => element > 7);
console.log(result ? `Первое число > 7: ${result}` : "Все элементы < 7");

//Four
const multiplyingByTwo = mainArray.map((value) => {
  return value * 2;
});
console.log(multiplyingByTwo);

//Five

const numResult = mainArray.filter((value) => value % 2 === 0);

console.log(`Четные элементы массива - ${numResult}`);
let sumresult = 0;
numResult.forEach((val) => {
  sumresult += val;
});

console.log(sumresult);

//Six

mainArray.shift();
console.log(mainArray);
mainArray.splice(mainArray.length - 1);
console.log(mainArray);

//Task*
const arrayOne = ["dog", "cat", "bird", "rabbit", "horse"];
const arrayTwo = ["apple", "car", "cat", "ball", "horse"];

const arrayThree = arrayOne.filter((vall) => arrayTwo.indexOf(vall) >= 0);
console.log(arrayThree);
