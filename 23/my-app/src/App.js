//import logo from './logo.svg';
import './App.css';
import TariffCards from '../src/components/Card';


const App = () => {
  return (
      <div className="tariffs">
          <h1>Наши тарифы</h1>
          <TariffCards />
      </div>
  );
};


export default App;
