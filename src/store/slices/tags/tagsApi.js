"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTags = createAsyncThunk(
    "tags/fetchTags",
    async function ({fetch, limit}) {
        if(fetch) {
            const {data: tagsData} = await axios.get(`http://api.calcarela.com/api/getTags`);
            const tagsId = await tagsData.map(el => {
                return el.id
            })
            const {data: productsByTagData} = await axios.post(`http://api.calcarela.com/api/productsByTeg/${limit}`, {ids: [...tagsId], headers: {"Content-Type": "application/json"}})
            return productsByTagData
        }
    }
)

export const fetchSortTags = createAsyncThunk(
    "tags/fetchSortTags",
    async function () {
        const {data: sortTagsData} = await axios.get(`http://api.calcarela.com/api/getTags`);
        return sortTagsData
    }
)