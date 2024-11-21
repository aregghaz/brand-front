"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {fakeUrl} from "@/utils/fakeUrl";

export const fetchTags = createAsyncThunk(
    "tags/fetchTags",
    async function ({fetch, limit}) {
        if(fetch) {
            const {data: tagsData} = await axios.get(`${fakeUrl}/api/getTags`);
            const tagsId = await tagsData.map(el => {
                return el.id
            })
            const {data: productsByTagData} = await axios.post(`${fakeUrl}/api/productsByTeg/${limit}`, {ids: [...tagsId], headers: {"Content-Type": "application/json"}})
            return productsByTagData
        }
    }
)

export const fetchSortTags = createAsyncThunk(
    "tags/fetchSortTags",
    async function () {
        const {data: sortTagsData} = await axios.get(`${fakeUrl}/api/getTags`);
        return sortTagsData
    }
)