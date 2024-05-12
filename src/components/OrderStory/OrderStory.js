"use client"
import React, { useCallback, useState } from 'react'
import MyRoomMenu from '../MyRoomMenu/MyRoomMenu'
import OrderStoryTable from '../OrderStoryTable/OrderStoryTable'
import Pagination from '../Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '@/store/slices/users/usersSlice'
import { fetchOrders } from '@/store/slices/users/usersApi'

function OrderStory() {

    const [toggleMore, setToggleMore] = useState(true)
    const dispatch = useDispatch()
    const {loginData, usersData, ordersStoryData} = useSelector(selectUsers)
    const [initialLength, setInitialLength] = useState(2)

    const showMore = useCallback(() => {
        if(loginData.access_token) {
            dispatch(fetchOrders({userToken: loginData.access_token, limit:  (ordersStoryData.length + 5), page: 1}))
        }
        setInitialLength(initialLength+5)
        if(initialLength + 5 !== ordersStoryData.length + 5) {
            setToggleMore(false)
        }
    }, [ordersStoryData, toggleMore])
    return (
        <section class="order-story">
            <div class="order-story__container _container">
                <h1>Оформление заказа</h1>
                <div class="order-story__flex">
                    <MyRoomMenu />
                    <div class="order-story__right">
                        <h2>Ваши заказы</h2>
                        <div className='order-story__box'>
                            <OrderStoryTable />
                        </div>
                        {toggleMore && <Pagination showMore={showMore} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderStory