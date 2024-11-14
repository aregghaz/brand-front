import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk(
    "brands/fetchBrands",
    async function ({limit}) {
        const {data: brandsData} = await axios.get(`http://api.calcarela.com/api/get-brands/${limit}`, {headers: {"Content-Type": "application/json"}})
        return brandsData
    }
)

export const fetchSingleBrend = createAsyncThunk(
    "brands/fetchSingleBrend",
    async function ({brendId}) {
        const {data: singleBrend} = await axios.get(`http://api.calcarela.com/api/get-single-brands/${brendId}`, {headers: {"Content-Type": "application/json"}})
        return singleBrend
    }
)

export const fetchBrandsByName = createAsyncThunk(
    "brands/fetchBrandsByName",
    async function ({name}) {
        const {data: brandsByNameData} = await axios.get(`http://api.calcarela.com/api/get-single-brands-name?name=${name}`, {headers: {"Content-Type": "application/json"}})
        return brandsByNameData
    }
)

export const fetchSinglBrendProducts = createAsyncThunk(
    "brands/fetchSinglBrendProducts",
    async function ({brendId, limit, page}) {
        const {data: singleBrendProductsData} = await axios.get(`http://api.calcarela.com/api/products-by-brand-id/${brendId}/${limit}?page=${page}`)
        return singleBrendProductsData
    }
)

export const fetchTopBrand = createAsyncThunk(
    "brands/fetchTopBrand",
    async function ({brendId, limit, page}) {
        const {data: singleBrendProductsData} = await axios.get(`http://api.calcarela.com/api/products-by-brand-id/${brendId}/${limit}?page=${page}`)
        return singleBrendProductsData
    }
)

export const fetchTopBrands = createAsyncThunk(
    "brands/fetchTopBrands",
    async function ({limit}) {
        const {data: topBrandsData} = await axios.get(`http://api.calcarela.com/api/top-brands/${limit}`)
        return topBrandsData
    }
)