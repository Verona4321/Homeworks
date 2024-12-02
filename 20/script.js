const form = document.querySelector('form');

// Формируем запрос 
function createQuery(){
    return `https://swapi.dev/api/${form.elements.searchObject.value}/${form.elements.number.value}/`;
}

// Логика вывода результата на экран
function showResult (item){
    if (item == undefined) {
        return;
    }
    document.querySelector('.result').textContent = `Твоя судьба - ${item}`;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.elements.searchObject.value == 'failure' || form.elements.number.value == '') {
        document.querySelector('.valErr').textContent = 'Пустой запрос не ведёт к свету. Сделай выбор';
    } else {
        document.querySelector('.valErr').textContent = '';
    }

    try{
        const response = await fetch(createQuery());
        const item = await response.json();
        console.log(item);

        const searchObj = item.name === undefined? item.title : item.name;
        showResult(searchObj);
    } catch (err) {
        console.log(err);
        showResult('Пустота. Но всегда можно попробовать заново');
        throw err;
    }
});