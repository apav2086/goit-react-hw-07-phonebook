import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    contact: [],
    filter: '',
};
const rootReducer = createSlice({
    name: 'root',
    initialState,
    reducers: {
        addContact: (state, action) => {
            return {
                ...state,
                contact: [...state.contact, action.payload],
            };
        },
        deleteContact: (state, action) => {
            return {
                ...state,
                contact: state.contact.filter(contact => contact.id !== action.payload),
            };
        },
        changeFilter: (state, action) => {
            return {
                ...state,
                filter: action.payload,
            };
        },
    },
});

export const { addContact, deleteContact, changeFilter } = rootReducer.actions;
export default rootReducer.reducer;