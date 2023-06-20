import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage';

export function Logout() {
    const navigate = useNavigate();
    const [, setAuth] = useLocalStorage('auth', {});

    const userLogout = () => {
        setAuth({});
    };

    useEffect(() => {
        userLogout();
        navigate('/login');
    }, []);

    return null;
}
