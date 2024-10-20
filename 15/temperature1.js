const cities = ['Москва', 'Алдан', 'Исламабад', 'Гоа'];
let temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите погоду для города ${cities[i]}`);
    temperatures.push(Number(temperature));
}
console.log(temperatures)

const listContainer = document.getElementById('ul')


for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = cities[i] + ': ' + temperatures[i] + ' °C';
    listContainer.append(listItem);
}

temperatures.sort(function (a, b) {
    return a - b;
});

console.log(temperatures); 

let maxTemperature = temperatures[temperatures.length-1];
let minTemperature = temperatures[0];

let tempMax = document.getElementById('tMax')
tempMax.innerHTML = `Максимальная температура: ${maxTemperature} °C`;

let tempMin = document.getElementById('tMin')
tempMin.innerHTML = `Минимальная температура: ${minTemperature} °C`;



/*
let showTemp = document.getElementById('show')

for (let i = 0; i < cities.length; i++) { 
    let info = cities[i] + ': ' + temperatures[i] + ' °C';

    let li = document.createElement('li');
    li.innerHTML = info;
    showTemp.append(info);
    
}*/


/*
const shoppingList = ['milk', 'bread', 'eggs'];

const listContainer = document.createElement('ul');

shoppingList.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `Purchase: ${item}`;
  listContainer.append(listItem);
});
*/



    


/*

const countries = ['Россия', 'США', 'Китай', 'Индия'];
let populations = [];

//Получение населения для каждой страны
for (let i = 0; i < countries.length; i++) {
    let population = prompt(`Введите население для страны ${countries[i]}`);
    populations.push(Number(population));
}

//Вычисление общей популяции
let totalPopulation = 0;
for (let i = 0; i < populations.length; i++) {
    totalPopulation += populations[i];
}

console.log(`Общая популяция всех стран: ${totalPopulation}`);


*/