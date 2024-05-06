"use client";
import Link from 'next/link'
import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectCategory} from '../../../store/slices/category/categorySlice'
import Image from 'next/image'
import {
    fetchCategory, fetcher,
    fetchSinglCategoryChildren,
    fetchSingleCategory
} from '../../../store/slices/category/categoryApi'
import useSWR from "swr";
function getNumberDetails() {
    const {data :categoryData, error} = useSWR(
        `https://back.brend-instrument.ru/api/category`,
        fetcher
    )
   /// console.log(categoryData,'categoryData')
    return ( <ul className='hide-catalog__grid'>
        {
            categoryData?.map(category => (
                <li key={category.id}>
                    <Link
                        className='category-title'
                        href={`/categorySingl/${category.slug}`} onClick={() => {
                       // dispatch(fetchSingleCategory({categorySlug: category.slug, limit: 20}));
                        //dispatch(fetchSinglCategoryChildren({categoryId: category.id, limit: 20}))
                        //headerToggleClick(false);
                    }}
                    >{category.icon != 0 && <Image src={"https://back.brend-instrument.ru" + category.icon} width={15} height={15}/>}{category.title}</Link>
                    <ul>
                        {
                            category.children?.map(el => (
                                <li key={el.id}>
                                    <Link href={`/categorySingl/${el.slug}`} onClick={() => {
                                       // dispatch(fetchSingleCategory({categorySlug: el.slug, limit: 20}));
                                     //   dispatch(fetchSinglCategoryChildren({categoryId: el.id, limit: 20}))
                                        //xwheaderToggleClick(false);
                                    }}>{el.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            ))
        }
    </ul>)
}
function CategoryMenu({headerToggleClick, setMobileToggle}) {
    const [getCategory, setGetCategory] = useState(false)
    const dispatch = useDispatch()
   /// const {categoryData} = useSelector(selectCategory)
   /// const {data: categoryData , error} = getNumberDetails()
    // useEffect(() => {
    //     if (!getCategory && categoryData.length < 1) {
    //       ///  dispatch(fetchCategory({limit: 100}))
    //         setGetCategory(true)
    //     }
    // }, [categoryData])

    const categoryHandler = useCallback((slug, id) => {
        headerToggleClick(false);
        setMobileToggle(false)
        dispatch(fetchSingleCategory({categorySlug: slug, limit: 20}))
        dispatch(fetchSinglCategoryChildren({categoryId: id, limit: 20}))
    }, [])
    return (
        <div className='hide-catalog'>
            {getNumberDetails()}
        </div>
    )
}

export default CategoryMenu