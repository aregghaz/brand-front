"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Brandsingle from '../../components/Brandsingle/Brandsingle'
import { selectBrands } from '../../store/slices/brands/brandsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglBrendProducts } from '../../store/slices/brands/brandsApi';
import Head from 'next/head';
import axios from 'axios'

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const limit = 20;
    const page = 1;
    const res = await axios.get(`https://back.brend-instrument.ru/api/products-by-brand-id/${slug}/${limit}?page=${page}`);

    const brand = await res.data;
    return {
        props: {
            brand
        }
    };
}

export default function Page() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { singleBrendData } = useSelector(selectBrands);
    const [getBrend, setGetBrend] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(30)
    const { slug } = router.query;
    useEffect(() => {
        if (slug) {
            if (singleBrendData?.products?.length < limit) {
                setGetBrend(true)
            }
            if (!getBrend) {
                dispatch(fetchSinglBrendProducts({ brendId: slug, limit: limit, page: page }));
                setGetBrend(true)
            }
        }
    }, [singleBrendData, slug])
    return (
        <>
            {singleBrendData?.brand && (
                <Head>
                    <title>{singleBrendData.brand.meta_title}</title>
                    <meta name="description" content={singleBrendData.brand.meta_desc} />
                    <meta name="keywords" content={singleBrendData.brand.meta_key} />
                </Head>
            )}
            <Suspense>
                {slug && <Brandsingle
                            slug={slug}
                            limit={limit}
                            setLimit={setLimit}
                            page={page}
                            setPage={setPage}
                        />
                }
            </Suspense>
        </>
    )
}