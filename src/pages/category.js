"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTags } from "../store/slices/tags/tagsSlice";
import { fetchTags } from "../store/slices/tags/tagsApi";
import { fetchProductsByTag } from "../store/slices/products/productsApi";
import Catalog from "../components/Catalog/Catalog"
import Products from "../components/Products/Products";
import { useEffect, useState } from "react";
import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs"
import axios from "axios";
import {fetchCategory} from "@/store/slices/category/categoryApi";
export async function getStaticProps(context) {
    const dispatch = useDispatch()
  const res=   dispatch(fetchCategory({limit: 20}))

    return {
        // will be passed to the page component as props
        props: {
            Item: res.data
        },
    }
}

export default function CatalogPage({Item}) {
    const dispatch = useDispatch()
   /// const { tagsData, getTags } = useSelector(selectTags)
    const [sendFetch, setSendFetch] = useState(true)
    // useEffect(() => {
    //     if (getTags) {
    //         setSendFetch(false)
    //     } else {
    //         setSendFetch(true)
    //     }
    // }, [])
    return (
        <>
            {/*<Brendcrumbs />*/}
            <Catalog  Item={Item}/>
            {/*<Products idx={0} fetch={sendFetch} />*/}
        </>
    );
}
