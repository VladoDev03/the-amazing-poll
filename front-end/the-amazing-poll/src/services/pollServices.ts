import axios, { AxiosResponse } from 'axios';
import Poll from '../models/Poll';

const baseUrl = 'http://localhost:8080/polls'

export const getById = async (id: string) => {
    const response: AxiosResponse<Poll> = await axios
        .get<Poll>(`${baseUrl}/get/${id}`);

    return response.data;
}
