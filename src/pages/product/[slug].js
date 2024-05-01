"use client";
import {Suspense, useEffect, useLayoutEffect, useState} from "react";
import ProductSingle from "../../components/ProductSingle/ProductSingle";
import Products from "../../components/Products/Products";
import { useRouter } from 'next/router';

export default function ProductSinglPage() {
    const router = useRouter();
    const { slug } = router.query;
    const [slugString, setSlug]= useState(null)
    useLayoutEffect(() => {
        setSlug(slug)
    }, [slug])
    return (
        <>
            <Suspense>
                {
                    slugString && <ProductSingle slug={slugString} />
                }
            </Suspense>
            <Products idx={0} fetch={true} />
            <Products idx={1} />
        </>
    )
}