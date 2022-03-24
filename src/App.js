import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

const onAdd = (quantity) => {
  console.log(quantity)
}

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        </header>
        <section>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemlistContainer greeting="Gracias por visitarnos"/>
        </section>
    </div>
  );
}

export default App;