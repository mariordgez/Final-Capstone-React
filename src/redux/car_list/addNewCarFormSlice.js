import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  formDelay: true,
};

const addNewCarForm = createSlice({
  name: 'addNewCarForm',
  initialState,
  reducers: {
    openForm: (state) => (
      {
        open: !state.open,
        formDelay: true,
      }
    ),
    showForm: (state) => (
      {
        open: state.open,
        formDelay: !state.formDelay,
      }
    ),
  },
});

export const { openForm, showForm } = addNewCarForm.actions;
export default addNewCarForm;
