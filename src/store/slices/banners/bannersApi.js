"use client";

import useSWR from "swr";
import {fetcher} from "@/store/slices/category/categoryApi";

const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export  const fetchBanners = createAsyncThunk(
    "banners/fetchBanners",
    async function () {
        const {data: bannersData} = await useSWR(
            `http://api.calcarela.com/api/get-banners`,
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
            "http://api.calcarela.com/api/getSliders",
            fetcher
        )
       // const {data: bannerSlidesData} = await axios.get("https://back.brend-instrument.ru/api/getSliders", {headers: {"Content-Type": "application/json"}})
        return bannerSlidesData
    }
)