import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    metaData: {
        title: "",
        keyword: "",
        description: ""
    },
}

export const seoSlice = createSlice({
    name: 'seo',
    initialState,
    reducers: {
        allSeo: (state, action) => {
            state.metaData = action.payload;
        },
    }
});

export const { allSeo } = seoSlice.actions;
export default seoSlice.reducer;
