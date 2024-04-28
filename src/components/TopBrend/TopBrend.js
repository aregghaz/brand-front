"use client";
import React, { memo, useEffect, useState } from 'react'
import ProductItem from "../ProductItem/ProductItem"
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../store/slices/brands/brandsSlice';
import { fetchTopBrand } from '../../store/slices/brands/brandsApi';
import axios from 'axios';
import Link from 'next/link';

function TopBrend() {

    const  dispatch = useDispatch()
    const {topBrandData} = useSelector(selectBrands)
    const [getBrend, setGetBrend] = useState(false)
    useEffect(() => {
        if(topBrandData?.brand?.title) {
            return setGetBrend(true)
        }
        if(!getBrend) {
            dispatch(fetchTopBrand({brendId: "Makita", limit: 6}))
            setGetBrend(true)
        }
    }, [topBrandData, getBrend])
    return (
        <section className="top-brned">
            <div className="top-brned__container _container">
                <div className="section-title">
                    <h2>Электроинструменты от {topBrandData?.brand?.title}</h2>
                    <Link href="/brandSingle/Makita">Смотреть все</Link>
                </div>
                <div className="top-brned__flex">
                    <div className="top-brned__img" ></div>
                    <div className="top-brned__products">
                        {
                            topBrandData?.products?.map(el => (
                                <ProductItem key={el.id}  title={el.title} img={"https://back.brend-instrument.ru" + el.image} price={el.price} salePrice={el.special_price === 0 ? false : el.special_price} id={el.id} slug={el.slug} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(TopBrend)