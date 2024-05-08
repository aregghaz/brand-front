import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsByTag, fetchSingleProduct, fetchTopProducts } from "./productsApi";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsByTagData: [],
        singlProductData: {},
        topProductsData: [],
        preOrderData: {
            id: "",
            price: "",
            toggle: false
        }
    },
    reducers: {
        counter: (state, {payload}) => {
            state.singlProductData = {
                ...state.singlProductData,
                count: payload.type === "+" ? state.singlProductData.count + 1 : state.singlProductData.count - 1
            }
        },
        preOrder: (state, {payload}) => {
            if (payload) {
                state.preOrderData.id = payload.id;
                state.preOrderData.price = payload.price / 100 * 10
                state.preOrderData.toggle = payload.toggle
                state.preOrderData.name = payload.name
            }else [
                state.preOrderData = {}
            ]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsByTag.fulfilled, (state, {payload}) => {
            if(payload) {
                state.productsByTagData = [...payload]
            }
        }),
        builder.addCase(fetchSingleProduct.fulfilled, (state, {payload}) => {
            if(payload) {
                state.singlProductData = {
                    ...payload,
                    count: 1,
                }
            }
        }),
        builder.addCase(fetchTopProducts.fulfilled, (state, {payload}) => {
            if(payload) {
                state.topProductsData = [...payload.products] 
            }
        })
    }
})

export const selectProducts = state => state.products
export const { counter, preOrder } = productsSlice.actions
export const productsReducer = productsSlice.reducer