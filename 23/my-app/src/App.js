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



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
