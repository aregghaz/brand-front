import React from 'react'
import Sale from '../components/Sale/Sale'
import Brendcrumbs from '../components/Brendcrumbs/Brendcrumbs'
import axios from 'axios'

export async function getServerSideProps() {
    const res = await axios.get(`https://back.brend-instrument.ru/api/getTags`);

    const tags = await res.data;
    return {
        props: {
            tags
        }
    };
}

export default function Page() {
    return (
        <>
            <Brendcrumbs title={"Акции"} />
            <Sale fetch={true} idx={0}/>
        </>
    )
}
