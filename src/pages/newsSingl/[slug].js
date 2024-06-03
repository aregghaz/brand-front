"use client"
import { Suspense, useEffect } from "react";
import NewsSingl from "../../components/NewsSingl/NewsSingl";
import HomeNews from "../../components/HomeNews/HomeNews"
import { useRouter } from "next/router";
import axios from 'axios'
import Head from 'next/head';

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

export default function NewsSinglPage({ news }) {
    const router = useRouter()
    const {slug} = router.query
    useEffect(() => {}, [slug])
    return (
        <>
            {news && (
                <Head>
                    <title>{news.meta_title}</title>
                    <meta name="description" content={news.meta_desc} />
                    <meta name="keywords" content={news.meta_key} />
                </Head>
            )}
            <Suspense>
                {slug && <NewsSingl slug={slug} />}
            </Suspense>
            <HomeNews />
        </>
    )
}