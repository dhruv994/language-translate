import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { addCar, removeCar, changeSearchTerm, carReducer } from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        form: formReducer
    }
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };