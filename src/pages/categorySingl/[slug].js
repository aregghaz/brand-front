"use client";
import { Suspense, useEffect } from "react";
import CatalogSingle from "../../components/CatalogSingle/CatalogSingle"
import Products from "../../components/Products/Products";
import { useRouter } from 'next/router';
import PreOrderModal from "@/components/PreOrderModal/PreOrderModal";
import { useSelector } from "react-redux";
import { selectProducts } from "@/store/slices/products/productsSlice";

export default function CatalogSinglePage() {
    const router = useRouter();
    const { slug } = router.query;
    const {preOrderData} = useSelector(selectProducts)
    return (
        <>
            <Suspense >
                {slug && <CatalogSingle slug={slug}  />}
            </Suspense>
            <Products idx={0} fetch={true} />
            <Products idx={1} />
            {
                preOrderData.id && <PreOrderModal />
            }
        </>
    );
}