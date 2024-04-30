"use client";
import { Suspense, useEffect } from "react";
import ProductSingle from "../../components/ProductSingle/ProductSingle";
import Products from "../../components/Products/Products";
import { useRouter } from 'next/router';

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://back.brend-instrument.ru/api/products?showMore=10')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    console.log(paths,'params.slug}')
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    console.log(params.slug,'params.slug}')
    const res = await fetch(`https://back.brend-instrument.ru/api/singleProduct/${params.slug}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}
export default function ProductSinglPage(props) {
    const router = useRouter();
    const { slug } = router.query;
    useEffect(() => {
    }, [])
    return (
        <>

            <Suspense>
                {
                    slug && <ProductSingle slug={props.slug} />
                }
            </Suspense>
            <Products idx={0} fetch={true} />
            <Products idx={1} />
        </>
    )
}