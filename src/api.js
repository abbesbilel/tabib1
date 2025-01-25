// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

export const getDoctors = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/doctors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
    }
};

export const getDoctorById = async (doctorId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/doctors/${doctorId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctor details:', error);
        throw error;
    }
};

export const searchDoctors = async (filters) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, { params: filters });
        return response.data;
    } catch (error) {
        console.error('Error searching doctors:', error);
        throw error;
    }
};

export const getReviews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const createReview = async (reviewData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reviews`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Error creating review:', error);
        throw error;
    }
};

export const updateReview = async (id, reviewData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/reviews/${id}`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Error updating review:', error);
        throw error;
    }
};

export const deleteReview = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/reviews/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting review:', error);
        throw error;
    }
};