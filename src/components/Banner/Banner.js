"use client"
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBanners } from '@/store/slices/banners/bannersSlice'
import { fetchBanners } from '@/store/slices/banners/bannersApi'
import {fakeUrl} from "@/utils/fakeUrl";

function Banner({position}) {

    const [getBanner, setGetBanner] = useState(false)

    const [banner, setBanner] = useState({})

    const dispatch = useDispatch()

    const {bannersData} = useSelector(selectBanners)

    useEffect(() => {
        if(bannersData.length) {
            return setGetBanner(true)
        }
        if(!getBanner) {
            dispatch(fetchBanners())
            setGetBanner(true)
        }
    }, [bannersData])
    
    useEffect(() => {
        if (bannersData.length === 0 && getBanner) {
            setGetBanner(false)
        }
        setBanner(...bannersData.filter(el => el.position === position));
    }, [getBanner])

    return (
        <>
        {
            banner?.image &&
                <div className="banner">
                    <div className="banner__container _container" style={{backgroundImage: "url("+bannersData[0]?.image+")" }}>
                        <img src={fakeUrl + banner?.image} alt={"banner"}/>
                    </div>
                </div>
        }
        </>
    )
}

export default memo(Banner)