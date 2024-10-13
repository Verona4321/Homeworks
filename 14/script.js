let grades = Array.from({length: 12}, () => Math.round(Math.random()*100));
console.log(grades);

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

console.log(average(grades));

const maxValue = Math.max.apply(null, grades);

console.log(maxValue);

const minValue = Math.min.apply(null, grades);

console.log(minValue);



const filteredPositive = grades.filter(el=>el >= 60);
console.log(filteredPositive); 

const filteredNegative = grades.filter(el=>el < 60);
console.log(filteredNegative); 




const secondArr = grades.map(function (item) { //Берём каждый элемент массива
  if (item >= 80) {return 'A';}
  if (item >= 60 & item < 80) {return 'B';}
  if (item >= 40 & item < 60) {return 'C';}
  if (item >= 20 & item < 40) {return 'D';}
  if (item < 20) {return 'E';}
}); 

console.log(secondArr); 
