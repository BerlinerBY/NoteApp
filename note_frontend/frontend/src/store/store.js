import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/slices/noteSlicer";

export default configureStore({
    reducer: {
        noter: noteReducer,
    }
})