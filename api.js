import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; 

export const createComment = (postId, commentData) => {
    return axios.post(`${API_URL}/comments`, { postId, ...commentData });
};

export const getPost = (postId) => {
    return axios.get(`${API_URL}/posts/${postId}`);
};

// Weitere API-Methoden 
