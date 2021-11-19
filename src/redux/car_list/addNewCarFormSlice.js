import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const addNewCarForm = createSlice({
  name: 'addNewCarForm',
  initialState,
  reducers: {
    openForm: (state) => (
      {
        open: !state.open,
      }
    ),
  },
});

export const { openForm } = addNewCarForm.actions;
export default addNewCarForm;
