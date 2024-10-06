
function BirthDay() {
    let date = document.getElementById('date');
    let dateStr = date.value;
    const dateTimestamp = Date.parse(dateStr);
    const currentTimestamp = Date.now();  //Получаем текущий таймстамп
    const timeDiff = currentTimestamp - dateTimestamp; //Рассчитываем разницу в миллисекундах между текущим временем и временем сообщения
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); //Преобразуем разницу в миллисекундах в количество дней
    let text = document.getElementById('daysText').textContent;  // Достаём текстовое содержимое
    document.getElementById('daysText').textContent = `До дня рождения осталось: ${daysPassed} дней`;  //Меняем текст
    
}









