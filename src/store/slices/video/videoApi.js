import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk(
    "video/fetchVideos",
    async function ({limit, page}) {
        const {data: videosData} = await axios.get(`http://api.calcarela.com/api/get-videos/${limit}?page=${page}`)
        return videosData
    }
)