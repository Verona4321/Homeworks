import React from 'react';
import data from './heroes.json'; // Импортируем JSON-файл

const Hero = () => {
return (
<div>
<h1>Имя: {data.name}</h1>
<p>Вселенная: {data.universe}</p>
<p>Альтер Эго: {data.alterego}</p>
<p>Род деятельности: {data.occupation}</p>
<p>Друзья: {data.friends}</p>
<p>Суперсилы: {data.superpowers}</p>
<img src={data.url}></img>
</div>
);
};

export default Hero;