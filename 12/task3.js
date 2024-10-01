const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const randomIndex1 = Math.floor(Math.random() * 10);
const randomLetter1 = alphabet[randomIndex1];
const randomIndex2 = Math.floor(Math.random() * 10);
const randomLetter2 = alphabet[randomIndex2];
const randomIndex3 = Math.floor(Math.random() * 10);
const randomLetter3 = alphabet[randomIndex3];
const randomIndex4 = Math.floor(Math.random() * 10);
const randomLetter4 = alphabet[randomIndex4];

console.log("Случайное слово: " + randomLetter1 + randomLetter2 + randomLetter3 + randomLetter4);
