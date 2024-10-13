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
