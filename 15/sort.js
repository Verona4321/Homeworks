let numbers = [];
let helper = [];
let firstNumber = -10;
let number = firstNumber;

while (number < 11) {
    numbers.push(number);
    number++
}

console.log(numbers);

for (number of numbers) {
    if (number > 0) {helper.push(number);}
}

console.log(helper);

numbers = [ ...helper ];
helper = [];
console.log(numbers);

for (let i = 0; i < 10; i++) {
  numbers[i] = numbers[i]*numbers[i];
}
console.log(numbers);

for (let numberID = 0; numberID < numbers.length; numberID++) {
    for (let numbersIndex = 0; numbersIndex < 10; numbersIndex++) {
        const a = numbers[numbersIndex];
        const b = numbers[numbersIndex + 1];
    
        if (a > b) {
            numbers[numbersIndex] = a;
            numbers[numbersIndex + 1] = b;
        }
        else if (b > a) {
            numbers[numbersIndex] = b;
            numbers[numbersIndex + 1] = a;
        }
    }
}



console.log(numbers);