"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { selectBanners } from '../../../store/slices/banners/bannersSlice';
import { fetchBannerSlides } from '../../../store/slices/banners/bannersApi';
import { selectProducts } from '../../../store/slices/products/productsSlice';
import useSWR from "swr";
import {fetcher} from "@/store/slices/category/categoryApi";
import {fakeUrl} from "@/utils/fakeUrl";

function MainBanner() {
  const [getBanners, setGetBanners] = useState(false)
  const {data: bannerSlidesData} =  useSWR(
      `${fakeUrl}api/get-banners`,
      fetcher
  )
//  const {bannerSlidesData} = useSelector(selectBanners)
  const {topProductsData} = useSelector(selectProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    if(true) {
      return setGetBanners(true)
    }
    console.log(getBanners,'getBanners')
    if(!getBanners) {

     /// setbannerSlidesData(bannersData)
      setGetBanners(false)
    }
  }, [bannerSlidesData])
  console.log(bannerSlidesData,'bannerSlidesData')
  return (
    <div className="main__banner" style={{maxWidth: topProductsData.length < 1 ? "100%" : ""}}>
      <Swiper >
        {
          bannerSlidesData?.map(banner => (
            <SwiperSlide key={banner.id}>
              <img src={"http://api.calcarela.com" + banner.image} alt="banner" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MainBanner