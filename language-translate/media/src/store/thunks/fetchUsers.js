import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    console.log('response', response.data);
    await pause(1000);
    return response.data;
});
const pause = (duration) => {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration)
    })
}