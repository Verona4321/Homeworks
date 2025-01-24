
import './App.css';
//import Hero from './card'; 
import Heroes from './Heroes'; // Импортируем компонент Heroes


function App() {
  return (
    <div>
            <h1>Супергерои</h1>
            <Heroes /> {/* Добавляем компонент Heroes */}
        </div>
  );
}

export default App;
