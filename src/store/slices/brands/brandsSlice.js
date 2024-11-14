"use client";
import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands, fetchBrandsByName, fetchSinglBrendProducts, fetchSingleBrend, fetchTopBrand, fetchTopBrands } from "./brandsApi";

export const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        brandsData: [],
        singleBrend: {},
        brandsByNameData: [],
        singleBrendData: {},
        topBrandData: {},
        topBrandsData: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBrands.fulfilled, (state, {payload}) => {
            if(payload) {
                state.brandsData = [...payload];
            }
        })
        builder.addCase(fetchSingleBrend.fulfilled, (state, {payload}) => {
            if(payload && payload.image) {
                state.singleBrend = {
                    ...payload,
                    image: "http://api.calcarela.com" + payload.image
                };
            }
        })
        builder.addCase(fetchBrandsByName.fulfilled, (state, {payload}) => {
            if(payload) {
                state.brandsByNameData = [...payload];
            }
        })
        builder.addCase(fetchSinglBrendProducts.fulfilled, (state, {payload}) => {
            if(payload) {
                state.singleBrendData = {...payload};
            }
        })
        builder.addCase(fetchTopBrand.fulfilled, (state, {payload}) => {
            if(payload) {
                state.topBrandData = {...payload};
            }
        });
        builder.addCase(fetchTopBrands.fulfilled, (state, {payload}) => {
            if(payload) {
                state.topBrandsData = [...payload];
            }
        });
    }
});

export const selectBrands = state => state.brands;
export const brandsReducer = brandsSlice.reducer;
