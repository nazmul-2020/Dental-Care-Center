import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/about' element={<About></About>}>About</Route>
      </Routes>
      <NotFound></NotFound>
      <Footer></Footer>

    </div>
  );
}

export default App;
