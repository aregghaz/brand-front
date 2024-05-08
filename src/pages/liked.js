"use client"
import PreOrderModal from "@/components/PreOrderModal/PreOrderModal";
import Brendcrumbs from "../components/Brendcrumbs/Brendcrumbs";
import Liked from "../components/Liked/Liked";
import { useSelector } from "react-redux";
import { selectProducts } from "@/store/slices/products/productsSlice";

export default function LiketPage () {
    const {preOrderData} = useSelector(selectProducts)
    return (
        <>
            <Brendcrumbs title={"Избранное"} />
            <Liked />
            {
                preOrderData.id && <PreOrderModal />
            }
        </> 
    )
}