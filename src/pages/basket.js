"use client";
import Basket from "../components/Basket/Basket";
import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import Head from 'next/head';

export default function BasketPgae() {
    return (
        <>
            <Head>
                <title>Корзина</title>
            </Head>
            <Brendcrumbs title={"Корзина"} />
            <Basket />
        </>
    )
}