import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemlistContainer greeting="Gracias por visitarnos"/>
        </header>
    </div>
  );
}

export default App;