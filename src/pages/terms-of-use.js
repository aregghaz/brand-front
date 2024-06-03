import Brendcrumbs from "@/components/Brendcrumbs/Brendcrumbs";
import TermsOfUse from "@/components/Terms/TermsOfUse";
import Head from 'next/head';

export default function Page () {
    return (
        <>
            <Head>
                <title>Соглашение пользователя</title>
                <meta name="description" content="Согласие на обработку персональных данных" />
            </Head>
            <Brendcrumbs title={"Соглашение пользователя"} />
            <TermsOfUse />
        </>
    )
}