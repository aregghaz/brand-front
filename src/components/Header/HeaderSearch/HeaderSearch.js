"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from "../../../store/slices/search/searchApi"
import { selectSearch, toggleSearchValue } from '../../../store/slices/search/searchSlice';
import { fetchSingleProduct } from "../../../store/slices/products/productsApi"
import { SearchIcon } from '../../../svg';
import { selectCategory } from '../../../store/slices/category/categorySlice';
import parse from 'html-react-parser';

import Link from 'next/link';
import Image from 'next/image';

function HeaderSearch({ headerToggles, headerToggleClick, mobileSearch, setMobileSearch }) {
    const [category, setCategory] = useState(false)
    const { categoryData } = useSelector(selectCategory)
    const [searchResults, setSearchResults] = useState([])
    const dispatch = useDispatch()
    const { searchProductsData } = useSelector(selectSearch)
    const searchRef = useRef(null)
    const [count, setCount] = useState(4)
    const searchSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchSearch({ value: searchRef.current[0].value }))
        dispatch(toggleSearchValue(searchRef.current[0].value))
        headerToggleClick(headerToggles ? null : "searchToggle")
        if (!searchRef.current[0].value.split("").length) {
            headerToggleClick(null)
        }
    }

    useEffect(() => {
        console.log(typeof window !== 'undefined' && window.innerWidth);
        setSearchResults([...searchProductsData.slice(0,3)])
    }, [searchProductsData])

    const productLinkClick = (slug) => {
        dispatch(fetchSingleProduct({ slug: slug }))
        headerToggleClick(false)
    }

    return (
        <div className="header__search">
            <form ref={searchRef} onSubmit={searchSubmit}>
                <label htmlFor={'asd'} className="input-text">
                    <input type="text" placeholder="Поиск по товарам..." onFocus={(e) => {
                        headerToggleClick(headerToggles ? null : "searchToggle")
                        if (!e.target.value.split("").length) {
                            headerToggleClick(null)
                        }
                    }} onInput={(e) => {
                        searchSubmit(e)
                        headerToggleClick(headerToggles ? null : "searchToggle")
                        if (!e.target.value.split("").length) {
                            headerToggleClick(null)
                        }
                    }} />
                </label>
                <label htmlFor={'asd'} className="input-btn">
                    <SearchIcon />
                    <input type="submit" defaultValue={'asd'} />
                </label>
            </form>
            {
                headerToggles === "searchToggle" &&
                <div className='header__search-result'>
                    <div className='header__search-scroll'>
                        {
                            searchResults?.map((el, index) => {
                                return count >= index && (<div key={el.id} className='header__search-item'>
                                    <Link href={`/product/${el.slug}`} className='img'
                                        onClick={() => productLinkClick(el.slug)}>
                                        <Image src={"https://back.brend-instrument.ru/" + el.image} alt={el.title}
                                            width={60} height={60} />
                                    </Link>
                                    <h4>
                                        <Link href={`/product/${el.slug}`} onClick={() => {
                                            productLinkClick(el.slug);
                                            setMobileSearch(false)
                                        }}>{el.title}
                                            <div className="prices">
                                                <p>{el?.special_price ? el.special_price : el.price} ₽  </p>
                                                {
                                                    el?.special_price ?
                                                        <span> {el.price} ₽</span> : <></>
                                                }
                                            </div>
                                            <div className='header__search-description'>
                                                {parse(el.description.slice(0, 100))}
                                                <span>{el.description.split("").length > 100 && "..."}</span>
                                            </div>
                                        </Link>
                                    </h4>
                                </div>)
                            })
                        }
                        <div className="header__search-show-more">
                            <Link href={"/search"} onClick={() => headerToggleClick(null)} className="show-more">
                                Все результаты ({
                                    count > searchProductsData.length ? searchProductsData.length : searchProductsData.length - count
                                })
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeaderSearch