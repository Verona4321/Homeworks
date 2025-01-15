import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Регистрация необходимых компонентов Chart.js
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

// Данные для диаграммы
const data = {
    labels: ['Работа', 'Сон', 'Прогулка', 'Учеба', 'Время с семьей'],
    datasets: [
        {
            label: '# of Votes',
            data: [25, 25, 10, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(102, 66, 186, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(74, 44, 143, 0.6)',
            ],
            borderWidth: 1,
        },
    ],
};


const options = {
    plugins: {
        legend: {
            display: true,
            position: 'top', // Позиция леганды (top, bottom, left, right)
        },
    },
};

const MyChart = () => {
    return (
        <div>
            <h2>Мои активности</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default MyChart;

