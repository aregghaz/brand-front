import React from 'react'
import Brendcrumbs from '../components/Brendcrumbs/Brendcrumbs'
import VideosPage from '@/components/VideosPage/VideosPage'
import axios from 'axios'

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
            <Brendcrumbs title={"Видеообзоры"} />
            <VideosPage/>
        </>
    )
}
