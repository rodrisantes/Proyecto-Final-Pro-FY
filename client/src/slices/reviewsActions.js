import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk('reviews/getReviews', async () => {
    try {
        const response = await axios.get('http://192.168.0.12:3001/api/reviews')
        const data = response.data.data.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }        
})

export const postReview = createAsyncThunk('reviews/postReview', async (newQuery) => {
    try {
        const response = axios.post('http://192.168.0.12:3001/api/reviews', newQuery)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putReview = createAsyncThunk('reviews/putReview', async (id, query) => {
    try {
        const response = axios.put(`http://192.168.0.12:3001/api/reviews/${id}`, query)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
    try {
        const response = axios.delete(`http://192.168.0.12:3001/api/reviews/${id}`)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})