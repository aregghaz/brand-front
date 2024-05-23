"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/category/categorySlice";
import { tagsReducer } from "./slices/tags/tagsSlice";
import { productsReducer } from "./slices/products/productsSlice";
import { brandsReducer } from "./slices/brands/brandsSlice";
import { usersReducer } from "./slices/users/usersSlice";
import { bannersReducer } from "./slices/banners/bannersSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { cartReducer } from "./slices/cart/cartSlice";
import { newsReducer } from "./slices/news/newsSlice";
import { likedReducer } from "./slices/liked/likedSlice";
import { contactsReducer } from "./slices/contacts/contactsSlice";
import { videoReducer } from "./slices/video/videoSlice";

const loadStateFromLocalStorage = () => {
    try {
        const serializedLoginData = localStorage.getItem('loginData');
        const serializedUsersData = localStorage.getItem('usersData');
        return {
            users: {
                loginData: serializedLoginData ? JSON.parse(serializedLoginData) : {},
                usersData: serializedUsersData ? JSON.parse(serializedUsersData) : {},
                ordersStoryData: [],
                orderSingleData: {},
                saveUser: false
            }
        };
    } catch (e) {
        console.error("Could not load state", e);
        return {};
    }
};

const preloadedState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
    category: categoryReducer,
    tags: tagsReducer,
    products: productsReducer,
    brands: brandsReducer,
    users: usersReducer,
    banners: bannersReducer,
    search: searchReducer,
    cart: cartReducer,
    news: newsReducer,
    liked: likedReducer,
    contacts: contactsReducer,
    video: videoReducer
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

export default store;
