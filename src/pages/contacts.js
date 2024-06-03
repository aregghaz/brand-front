import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import Callback from "../components/Callback/Callback";
import Contacts from "../components/Contacts/Contacts";
import Head from 'next/head';
import axios from 'axios'

export async function getServerSideProps() {
    const res = await axios.get(`https://back.brend-instrument.ru/api/contacts-us`);

    const contacts = await res.data.data;
    return {
        props: {
            contacts
        }
    };
}

export default function page ({contacts}) {
    return (
        <>
            {contacts && (
                <Head>
                    <title>Контакты</title>
                    <meta name="description" content={contacts.address} />
                    <meta name="keywords" content={contacts.address} />
                </Head>
            )}
            <Brendcrumbs title={"Контакты"} />
            <Callback />
            <Contacts />
        </>
    )
}