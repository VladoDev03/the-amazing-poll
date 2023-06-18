import axios, { AxiosResponse } from 'axios';
import UserLogin from '../models/UserLogin';

const baseUrl = 'http://localhost:8080/auth'

export const register = async (registerData: UserLogin) => {
    const response: AxiosResponse<string> = await axios
        .post<string>(`${baseUrl}/register`, registerData);
    
    return response.data;
}

export const login = async (loginData: UserLogin) => {
    const response: AxiosResponse<string> = await axios
        .post<string>(`${baseUrl}/login`, loginData);
    
    return response.data;
}
