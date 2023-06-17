import './App.scss';

import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/login-form/LoginForm';
import RegisterForm from './components/register-form/RegisterForm';
import NewPoll from './components/new-poll/NewPoll';

function App() {
    return (
        <Routes>
            <Route path='/new-poll' element={<NewPoll />}></Route>
            <Route path='/login' element={<LoginForm />}></Route>
            <Route path='/register' element={<RegisterForm />}></Route>
        </Routes>
    );
}

export default App;
