import Brendcrumbs from "@/components/Brendcrumbs/Brendcrumbs";
///import BuyInstrument from "@/components/BuyInstrument/BuyInstrument";
import PrivacyPolice from "@/components/Privacy/Privacy";
import Head from 'next/head';

export default function Page () {
    return (
        <>
            <Head>
                <title>Политика конфиденциальности</title>
                <meta name="description" content="Согласие на обработку персональных данных" />
            </Head>
            <Brendcrumbs title={"Политика конфиденциальности"} />
            <PrivacyPolice />
        </>
    )
}