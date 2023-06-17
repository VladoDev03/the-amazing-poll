import './App.scss';

import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/login-form/LoginForm';
import RegisterForm from './components/register-form/RegisterForm';
import NewPoll from './components/new-poll/NewPoll';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/new-poll' element={<NewPoll />}></Route>
                <Route path='/login' element={<LoginForm />}></Route>
                <Route path='/register' element={<RegisterForm />}></Route>
            </Routes>
        </div>
    );
}

export default App;
