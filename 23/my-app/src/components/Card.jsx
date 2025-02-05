import React, { useState } from 'react';
import './Card.css'; 

const TariffCard = ({ title, price, speed, description, isActive, color, onClick }) => {
    // Состояние для отслеживания, выбран ли тариф
    const [isSelected, setIsSelected] = useState(false);

    const handleButtonClick = () => {
        // Меняем состояние выбранного тарифа
        setIsSelected(true);
        // Вызываем функцию для установки активного тарифа
        onClick();
    };

    return (
        <div 
            className={`tariff-card ${isActive ? 'active' : ''}`} 
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            <h2>{title}</h2>
            <p className="price">{price} руб/мес</p>
            <p>{speed}</p>
            <p>{description}</p>
            <button 
                style={{ 
                    backgroundColor: isSelected ? '#ffcc00' : '#007bff', // Цвет кнопки меняется в зависимости от состояния
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    cursor: 'pointer',
                }}
                onClick={handleButtonClick} // Обработчик клика на кнопку
                disabled={isSelected} // Делаем кнопку неактивной, если тариф уже выбран
            >
                {isSelected ? 'Тариф выбран' : 'Выбрать тариф'} {/* Изменяем текст кнопки */}
            </button>
        </div>
    );
};

const TariffCards = () => {
    // Состояние для хранения текущего выбранного тарифа
    const [activeTariffIndex, setActiveTariffIndex] = useState(null);

    const tariffs = [
        { title: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/сек', description: 'Объём включенного трафика не ограничен', color: '#ccffcc' },
        { title: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/сек', description: 'Объём включенного трафика не ограничен', color: '#ffcccc' },
        { title: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/сек', description: 'Объём включенного трафика не ограничен', color: '#ccaacc' },
        { title: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/сек', description: 'Объём включенного трафика не ограничен', color: '#ccccff' },
    ];

    return (
        <div className="tariff-cards-container">
            {tariffs.map((tariff, index) => (
                <TariffCard 
                    key={index}
                    title={tariff.title}
                    price={tariff.price}
                    speed={tariff.speed}
                    description={tariff.description}
                    isActive={activeTariffIndex === index} // Проверка, активна ли карточка
                    color={tariff.color}
                    onClick={() => setActiveTariffIndex(index)} // Устанавливаем активный тариф при клике на карточку
                />
            ))}
        </div>
    );
};

export default TariffCards;