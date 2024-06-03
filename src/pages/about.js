import AbautPage from "../components/AbautPage/AbautPage";
import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import Products from "../components/Products/Products";
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title>О компании</title>
            </Head>
            <Brendcrumbs title={"О компании"} />
            <AbautPage />
            <Products idx={0} fetch={true} />
        </>
    )
}