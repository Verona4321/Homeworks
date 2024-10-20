const cities = ['Москва', 'Алдан', 'Исламабад', 'Гоа'];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите население для страны ${cities[i]}`);
    temperatures.push(Number(temperature));
}

console.log(temperatures)

const listContainer = document.getElementById('ul1')


cities.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item + ': ' + "temperatures[i]" + ' °C';
    listContainer.append(listItem);
});



/*

const shoppingList = ['milk', 'bread', 'eggs'];

const listContainer = document.createElement('ul');

shoppingList.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `Purchase: ${item}`;
  listContainer.append(listItem);
});




    


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