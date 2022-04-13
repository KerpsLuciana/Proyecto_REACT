
import './App.css';
import NavBar from './components/navBar/Navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from './context/Context';
import Footer from './components/Footer/Footer';
import CartList from './components/CartList/CartList'


function App() {



  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<ItemlistContainer/>} />
          <Route path='/type/:categorytype' element={<ItemlistContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>} />
          <Route path='/Cart' element={<CartList/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </CartContextProvider>
    </div>
  );
}

export default App;