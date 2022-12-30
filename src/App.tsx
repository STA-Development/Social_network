import './App.css';
import LoginPage from './components/formPages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/formPages/signUp/SignUpPage';
import PostsPage from './components/home/PostsPage';
import { GlobalContext } from './context/CreateContext';

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
          <Route path='/PostsPage' element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
