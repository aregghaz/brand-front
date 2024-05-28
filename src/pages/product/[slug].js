"use client";
import { Suspense, useEffect, useState } from "react";
import ProductSingle from "../../components/ProductSingle/ProductSingle";
import Products from "../../components/Products/Products";
import { useRouter } from 'next/router';
import { selectProducts } from '../../store/slices/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../store/slices/products/productsApi';
import Head from 'next/head';

export default function ProductSinglPage() {
    const router = useRouter();
    const [images, setImages] = useState([])
    const { singlProductData } = useSelector(selectProducts);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const [getProduct, setGetProduct] = useState(false);
    const { slug } = router.query;
    useEffect(() => {
        if (slug) {
            if (singlProductData.id) {
                setIsLoading(true);
                setImages([
                    `https://back.brend-instrument.ru${singlProductData.image}`,
                    ...(Array.isArray(singlProductData?.images) ? singlProductData.images.map(el => `https://back.brend-instrument.ru${el.path}`) : [])
                ]);
            }
            if (!getProduct) {
                setIsLoading(false);
                dispatch(fetchSingleProduct({ slug: slug }));
                setGetProduct(true);
            }
        }
    }, [singlProductData, slug]);

    return (
        <>
            {slug && singlProductData && (
                <Head>
                    <title>{singlProductData.meta_title}</title>
                    <meta name="description" content={singlProductData.meta_desc} />
                    <meta name="keywords" content={singlProductData.meta_key} />
                </Head>
            )}
            <Suspense>
                {
                    slug && <ProductSingle
                                slug={slug}
                                images={images}
                                isLoading={isLoading}
                            />
                }
            </Suspense>
            <Products idx={0} fetch={true} />
            <Products idx={1} />
        </>
    )
}