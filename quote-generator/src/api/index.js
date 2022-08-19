import axios from 'axios';

const url = 'https://api.quotable.io';

export const fetchQuotes = () => axios.get(`${url}/random`);
export const fetchTags = () => axios.get(`${url}/tags`);