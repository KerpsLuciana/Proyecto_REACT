import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/Navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemlistContainer/>} />
        <Route path='/type/:categorytype' element={<ItemlistContainer/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;