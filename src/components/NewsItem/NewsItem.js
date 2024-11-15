"use client"
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchNewsSingl } from '../../store/slices/news/newsApi'

function NewsItem({id, img, title, day, year, mounth, slug}) {

    const dispatch = useDispatch()

    const handlerGetSingl = () => {
        dispatch(fetchNewsSingl({newsId: slug}))
    }

    return (
        <div className="news-item">
            <Link href={`/newsSingl/${slug}`} className="news-item__img" onClick={handlerGetSingl}>
                <img src={ "http://api.calcarela.com/" + img} alt="#"/>
            </Link>
            <div className="news-item__text">
                <span>{day}.{mounth}.{year} </span>
                <h4><Link href={`/newsSingl/${slug}`} onClick={handlerGetSingl}>{title}</Link></h4>
            </div>
        </div>
    )
}

export default NewsItem