import React from 'react';
import data from './heroes.json'; // Импортируем JSON-файл

const Heroes = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.map((hero, index) => (
                <React.Fragment key={index}>
                    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
                        <h2>Имя: {hero.name}</h2>
                        <p>Вселенная: {hero.universe}</p>
                        <p>Альтер Эго: {hero.alterego}</p>
                        <p>Род деятельности: {hero.occupation}</p>
                        <p>Друзья: {hero.friends}</p>
                        <p>Суперсилы: {hero.superpowers}</p>
                        {hero.url && <img src={hero.url} alt={hero.name} style={{ width: '100%', borderRadius: '4px' }} />}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Heroes;