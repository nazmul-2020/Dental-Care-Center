import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Shared/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}>About</Route>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
