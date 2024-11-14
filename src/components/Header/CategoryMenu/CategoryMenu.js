"use client"
import Link from 'next/link'
import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectCategory} from '../../../store/slices/category/categorySlice'
import {
    fetchCategory,
    fetchSinglCategoryChildren,
    fetchSingleCategory
} from '../../../store/slices/category/categoryApi'

function CategoryMenu({headerToggleClick, setMobileToggle}) {
    const [getCategory, setGetCategory] = useState(false)
    const dispatch = useDispatch()
    const {categoryData} = useSelector(selectCategory)
    useEffect(() => {
        if (!getCategory && categoryData.length < 1) {
            dispatch(fetchCategory({limit: 100}))
            setGetCategory(true)
        }
    }, [categoryData])

    const categoryHandler = useCallback((slug, id) => {
        headerToggleClick(false);
        setMobileToggle(false)
        dispatch(fetchSingleCategory({categorySlug: slug, limit: 20}))
        dispatch(fetchSinglCategoryChildren({categoryId: id, limit: 20}))
    }, [])
    return (
        <div className='hide-catalog'>
            <ul className='hide-catalog__grid'>
                {
                    categoryData?.map(category => (
                        <li key={category.id}>
                            <Link
                                className='category-title'
                                href={`/categorySingl/${category.slug}`} onClick={() => {
                                dispatch(fetchSingleCategory({categorySlug: category.slug, limit: 20}));
                                dispatch(fetchSinglCategoryChildren({categoryId: category.id, limit: 20}))
                                headerToggleClick(false);
                            }}
                            >{category.icon != 0 && <img src={"http://api.calcarela.com" + category.icon}/>}{category.title}</Link>
                            <ul>
                                {
                                    category.children?.map(el => (
                                        <li key={el.id}>
                                            <Link href={`/categorySingl/${el.slug}`} onClick={() => {
                                                dispatch(fetchSingleCategory({categorySlug: el.slug, limit: 20}));
                                                dispatch(fetchSinglCategoryChildren({categoryId: el.id, limit: 20}))
                                                headerToggleClick(false);
                                            }}>{el.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryMenu