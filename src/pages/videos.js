import React from 'react'
import Brendcrumbs from '../components/Brendcrumbs/Brendcrumbs'
import VideosPage from '@/components/VideosPage/VideosPage'
import axios from 'axios'
import Head from 'next/head';

export async function getServerSideProps() {
    const limit = 20;
    const page = 1;
    const res = await axios.get(`https://back.brend-instrument.ru/api/get-videos/${limit}?page=${page}`);

    const videos = await res.data;
    return {
        props: {
            videos
        }
    };
}

export default function Page() {
    return (
        <>
            <Head>
                <title>Видеообзоры</title>
            </Head>
            <Brendcrumbs title={"Видеообзоры"} />
            <VideosPage/>
        </>
    )
}
