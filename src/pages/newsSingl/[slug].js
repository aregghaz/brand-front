"use client"
import { Suspense, useEffect } from "react";
import NewsSingl from "../../components/NewsSingl/NewsSingl";
import HomeNews from "../../components/HomeNews/HomeNews"
import { useRouter } from "next/router";
import axios from 'axios'

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const res = await axios.get(`https://back.brend-instrument.ru/api/get-single-news/${slug}`);

    const news = await res.data;
    return {
        props: {
            news
        }
    };
}

export default function NewsSinglPage() {
    const router = useRouter()
    const {slug} = router.query
    useEffect(() => {}, [slug])
    return (
        <>
            <Suspense>
                {slug && <NewsSingl slug={slug} />}
            </Suspense>
            <HomeNews />
        </>
    )
}