import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async function() {
        const {data: contactsData} = await axios.get(`http://api.calcarela.com/api/contacts-us`)
        return contactsData
    }
)