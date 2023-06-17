import UserLogin from '../models/UserLogin';

const baseUrl = 'http://localhost:8080/auth'

export const login = async (user: UserLogin) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const result = response.json();

    return result;
}
