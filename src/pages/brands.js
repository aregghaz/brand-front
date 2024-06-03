import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import BrandsPage from "../components/BrandsPage/BrandsPage";
import axios from 'axios'
import Head from 'next/head';

export async function getServerSideProps() {
    const name = 'а'
    const res = await axios.get(`https://back.brend-instrument.ru/api/get-single-brands-name?name=${name}`);

    const brands = await res.data;
    return {
        props: {
            brands
        }
    };
}

export default function Page() {
    return (
        <>
            <Head>
                <title>Бренды</title>
            </Head>
            <Brendcrumbs title={"Бренды"} />
            <BrandsPage />
        </>
    )
}