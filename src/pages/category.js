"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTags } from "../store/slices/tags/tagsSlice";
import { fetchTags } from "../store/slices/tags/tagsApi";
import { fetchProductsByTag } from "../store/slices/products/productsApi";
import Catalog from "../components/Catalog/Catalog"
import Products from "../components/Products/Products";
import { useEffect, useState } from "react";
import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs"
import PreOrderModal from "@/components/PreOrderModal/PreOrderModal";
import { selectProducts } from "@/store/slices/products/productsSlice";
import axios from 'axios'
import Head from 'next/head';

export async function getServerSideProps() {
    const res = await axios.get(`https://back.brend-instrument.ru/api/getTags`);

    const tags = await res.data;
    return {
        props: {
            tags
        }
    };
}


export default function CatalogPage() {
    const dispatch = useDispatch()
    const { tagsData, getTags } = useSelector(selectTags)
    const [sendFetch, setSendFetch] = useState(true)
    const { preOrderData } = useSelector(selectProducts)
    useEffect(() => {
        if (getTags) {
            setSendFetch(false)
        } else {
            setSendFetch(true)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Категории</title>
            </Head>
            <Brendcrumbs />
            <Catalog />
            <Products idx={0} fetch={sendFetch} />
            {
                preOrderData.id && <PreOrderModal />
            }
        </>
    );
}
