"use client"
import React, {useCallback, useEffect, useState} from 'react'
import Loader from '../Loader/Loader'
import ProductItem from '../ProductItem/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {selectBrands} from '../../store/slices/brands/brandsSlice';
import {fetchSinglBrendProducts} from '../../store/slices/brands/brandsApi';
import Brendcrumbs from "../Brendcrumbs/Brendcrumbs"
import {useRouter} from 'next/router';

function Brandsingle({slug}) {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const {singleBrendData} = useSelector(selectBrands);
    const [getBrend, setGetBrend] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(30)
    const router = useRouter()

    useEffect(() => {
        if (singleBrendData?.products?.length < limit) {
            setGetBrend(true)
        }
        if (!getBrend) {
            dispatch(fetchSinglBrendProducts({brendId: slug, limit: limit, page: page}));
            setGetBrend(true)
        }
    }, [singleBrendData])

    const nextPage = useCallback(() => {
        if (page < singleBrendData.lastPage) {
            dispatch(fetchSinglBrendProducts({brendId: slug, limit: 20, page: page + 1}));
            setPage(page + 1)
            window.scrollTo(0, 0);
            setLimit(20)
        }
    }, [page, singleBrendData])


    console.log(limit ,singleBrendData?.products?.length,'limit === singleBrendData?.products?.lengthlimit === singleBrendData?.products?.length')
    const prevPage = useCallback(() => {
        if (page > 1) {
            dispatch(fetchSinglBrendProducts({brendId: slug, limit: 20, page: page + 1}));
            setPage(page - 1)
            setLimit(20)
            window.scrollTo(0, 0);
        }
    }, [page, singleBrendData])

    const showMore = useCallback(() => {
        if (limit < singleBrendData.total + 10) {
            dispatch(fetchSinglBrendProducts({brendId: slug, limit: limit + 30, page: 1}));
            setLimit(limit + 30)
        }
    }, [limit, singleBrendData])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [router])

    return (
        <>
            {
                isLoading ?
                    <>
                        <Brendcrumbs title={singleBrendData?.brand?.title} links={[{name: "Бренды", link: '/brands'}]}/>
                        <section className='brend-single'>
                            <div className='brend-single__container _container'>
                                <h1>{singleBrendData?.brand?.title}</h1>
                                <div className='brend-single__grid'>
                                    {
                                        singleBrendData?.products?.map(el => (
                                            <ProductItem key={el.id} title={el.title}
                                                         img={el.image ? "https://back.brend-instrument.ru" + el.image : null}
                                                         price={el.price}
                                                         salePrice={el.special_price === 0 ? false : el.special_price}
                                                         id={el.id} slug={el.slug}/>
                                        ))
                                    }
                                </div>
                                {limit === singleBrendData?.products?.length && (<div className='catalog-single__more'>
                                    <button className="show-more" onClick={() => {
                                        showMore()
                                    }}>
                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.06189 9.7385C1.02104 9.42042 1 9.09641 1 8.76755C1 4.47765 4.58172 1 9 1C11.5006 1 13.7332 2.11394 15.2002 3.85862M15.2002 3.85862V1M15.2002 3.85862V3.91276L12.2002 3.91283M16.9381 7.79661C16.979 8.11469 17 8.4387 17 8.76755C17 13.0575 13.4183 16.5351 9 16.5351C6.61061 16.5351 4.46589 15.518 3 13.9054M3 13.9054V13.6223H6M3 13.9054V16.5351"
                                                stroke="#333333" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        Показать еще
                                    </button>
                                </div>)}

                            </div>
                        </section>
                    </> : <Loader/>
            }
        </>
    )
}

export default Brandsingle