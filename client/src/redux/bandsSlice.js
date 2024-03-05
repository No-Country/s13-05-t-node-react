import { createSlice } from "@reduxjs/toolkit";


const initialState = {

   bands: [],

};

export const bandsSlice = createSlice({
  name: "bands",
  initialState,
    reducers: {
    setBands: (state, action) => {
      state.bands = action.payload;
    },
   
  },
});

// selectores
export const getBands = (state) => state?.bands?.bands;


// actions
export const {
 
  setBands
  
} = bandsSlice.actions;

export default bandsSlice.reducer;
