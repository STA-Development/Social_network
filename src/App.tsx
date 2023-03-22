import './App.css';
import LoginPage from './components/formPages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/formPages/signUp/SignUpPage';
import ProfilePage from './components/profile/Profile';
import UserContextProvider from './assets/context/userContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
          <Route path='/ProfilePage' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
