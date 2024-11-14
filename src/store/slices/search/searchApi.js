const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async function (payload) {
        const {data: searchProductData} = await axios.get(`http://api.calcarela.com/api/search/100?query=${payload.value}`, {headers: {"Content-Type": "application/json"}})
        
        return searchProductData
    }
)