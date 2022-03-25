import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        </header>
        <section>
        
        <ItemlistContainer greeting="Gracias por visitarnos"/>
        </section>
    </div>
  );
}

export default App;