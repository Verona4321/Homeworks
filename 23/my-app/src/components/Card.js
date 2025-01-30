import React from 'react';
import './Card.css'; 

const TariffCard = ({ title, price, speed, description, isActive, color }) => {
    return (
        <div className={`tariff-card ${isActive ? 'active' : ''}`} style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            <p className="price">{price} руб/мес</p>
            <p>{speed}</p>
            <p>{description}</p>
        </div>
    );
};


const TariffCards = () => {
    const tariffs = [
        { title: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/сек', description: 'Объём включенного трафика не ограничен', isActive: false, color: '#ccffcc' },
        { title: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/сек', description: 'Объём включенного трафика не ограничен', isActive: false, color: '#ffcccc' },
        { title: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/сек', description: 'Объём включенного трафика не ограничен', isActive: true, color: '#ccaacc' },
        { title: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/сек', description: 'Объём включенного трафика не ограничен', isActive: false, color: '#ccccff' },

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
                    isActive={tariff.isActive}
                    color={tariff.color}
                />
            ))}
        </div>
    );
};

export default TariffCards;