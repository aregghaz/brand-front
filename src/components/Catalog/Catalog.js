"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/slices/category/categorySlice';
import { fetchCategory } from '../../store/slices/category/categoryApi';
import CategoryItem from '../CategoryItem/CategoryItem';
import {fakeUrl} from "@/utils/fakeUrl";

function Catalog({Item}) {
    const dispatch = useDispatch()
    const categoryData =Item
    const [getCategory, setGetCategory] = useState(false)
    // useEffect(() => {
    //     if(!categoryData.length && !getCategory) {
    //       ///  dispatch(fetchCategory({limit: 20}))
    //         setGetCategory(true)
    //     }
    // }, [categoryData])
    return (
        <section className="catalog">
            <div className="catalog__container _container">
                <h1>Каталог</h1>
                <div className="catalog__grid">
                    {
                        categoryData?.map(category => (
                            <CategoryItem key={category.id} img={fakeUrl + category.image} title={category.title} id={category.id.toString()} slug={category.slug} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Catalog