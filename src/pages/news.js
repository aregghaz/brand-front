import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import News from "../components/News/News";
import axios from 'axios'
import Head from 'next/head';

export async function getServerSideProps() {
    const limit = 20;
    const page = 1;
    const res = await axios.get(`https://back.brend-instrument.ru/api/get-news/${limit}?page=${page}`);

    const news = await res.data;
    return {
        props: {
            news
        }
    };
}

export default function NewsPage() {
    return (
        <>
            <Head>
                <title>Новости</title>
            </Head>
            <Brendcrumbs title={"Новости"} />
            <News />
        </>
    )
}