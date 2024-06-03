import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import OrderStory from "../components/OrderStory/OrderStory";
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title>Мои заказы</title>
            </Head>
            <Brendcrumbs title={"Мои заказы"} />
            <OrderStory />
        </>
    )
}