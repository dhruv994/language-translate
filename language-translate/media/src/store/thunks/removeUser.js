import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    console.log("''''''''''''''''DELETE", user);
    return user;
})