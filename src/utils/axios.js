// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // URL de tu backend de Laravel
});

export default instance;

