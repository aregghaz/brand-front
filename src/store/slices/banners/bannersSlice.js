"use client";
import {createAsyncThunk} from "@reduxjs/toolkit";
import useSWR from "swr";
import {fetcher} from "@/store/slices/category/categoryApi";

const { createSlice } = require("@reduxjs/toolkit");
///const {  fetchBannerSlides } = require("./bannersApi");
export  const fetchBanners = createAsyncThunk(
    "banners/fetchBanners",
    async function () {
        const {data: bannersData} = await useSWR(
            `${fakeUrl}/api/get-banners`,
            fetcher
        )
        /// const {data: bannersData} =  await axios.get(`https://back.brend-instrument.ru/api/get-banners`, {headers: {"Content-Type": "application/json"}})

        return bannersData
    }
)
export const fetchBannerSlides = createAsyncThunk(
    "banners/fetchBannerSlides",
    async function () {
        const {data: bannerSlidesData} = await useSWR(
            `${fakeUrl}/api/getSliders`,
            fetcher
        )
        console.log(bannerSlidesData,'bannerSlidesDatabannerSlidesData')
        // const {data: bannerSlidesData} = await axios.get("https://back.brend-instrument.ru/api/getSliders", {headers: {"Content-Type": "application/json"}})
        return bannerSlidesData
    }
)
const bannersSlice = createSlice({
    name: "banners",
    initialState: {
        bannersData: [],
        bannerSlidesData: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBanners.fulfilled, (state, {payload}) => {
            if(payload) {
                state.bannersData = [...payload];
            }
        }),
        builder.addCase(fetchBannerSlides.fulfilled, (state, {payload}) => {
            if(payload) {
                state.bannerSlidesData = [...payload];
            }
        })
    }
})

export const selectBanners = state => state.banners;
export const bannersReducer = bannersSlice.reducer;
