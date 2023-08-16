import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })

        },
        removeCar(state, action) {
            console.log("STATE",state,action.payload);
            const updated = state.data.filter((car) => car.id !== action.payload);
            state.data = updated;
        }

    }
});

export const { addCar, removeCar, changeSearchTerm } = carSlice.actions;
export const carReducer = carSlice.reducer;