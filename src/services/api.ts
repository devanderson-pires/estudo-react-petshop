import axios from 'axios';
import React, { SetStateAction } from 'react';

export const api = axios.create({
	baseURL: 'http://localhost:5000/'
});

export const search = async <T>(url: string, setData: React.Dispatch<SetStateAction<T>>): Promise<void> => {
	const res = await api.get(url);
	setData(res.data);
};
