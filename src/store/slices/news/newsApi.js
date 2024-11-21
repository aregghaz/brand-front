import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parse from 'html-react-parser';
import {fakeUrl} from "@/utils/fakeUrl";

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async function ({limit, page}) {
        const {data: newsData} = await axios.get(`${fakeUrl}/api/get-news/${limit}?page=${page}`)
        return newsData
    }
)

export const fetchNewsSingl = createAsyncThunk(
    "news/fetchNewsSingle",
    async function ({newsId}) {
        const {data: newsSingleData} = await axios.get(`${fakeUrl}/api/get-single-news/${newsId}`)
        return newsSingleData
    }
)