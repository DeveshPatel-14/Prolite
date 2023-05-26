import{createSlice} from "@reduxjs/toolkit";

const initialState ={
    mode:"dark", //default theme of app
    userId: "63701cc1f03239b7f700000e",
    userRole: "student", // default user role
};

export const globalSLice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode = state.mode === 'light' ? "dark":'light';
        }
    }
})

export const {setMode} = globalSLice.actions;
export default globalSLice.reducer;