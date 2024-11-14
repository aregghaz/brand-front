"use client"
import { preOrder, selectProducts } from '@/store/slices/products/productsSlice'
import { selectUsers } from '@/store/slices/users/usersSlice'
import { ClousIcon } from '@/svg'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function PreOrderModal() {
    const { loginData } = useSelector(selectUsers)
    const [modalText, setModalText] = useState("Забронируйте инструмент заранее, и мы отложим их специально для вас! Бронь будет действительна в течение 24 часов.")
    const [btnText, setBtnText] = useState(true)
    const { preOrderData } = useSelector(selectProducts)
    const dispatch = useDispatch()

    function submitOrder() {
        axios.post(`http://api.calcarela.com/api/auth/pre-order/${preOrderData.id}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + loginData.access_token,
                }
            }
        ).then(res => {
            if (res.status === 200) {
                setModalText("Спасибо! Ваша заявка принята, скоро мы с Вами свяжемся!")
                setBtnText(false)
                setTimeout(() => {dispatch(preOrder())}, 5000)
            }
        })
    }

    useEffect(() => {}, [preOrderData])
    return (
        <div className='preorder-modal'>
            <div className='preorder-modal__container'>
                <div className='preorder-modal__title'>
                    <h2>Забронировать</h2>
                    <button onClick={() => dispatch(preOrder())}><ClousIcon /></button>
                </div>
                <div className='preorder-modal__body'>
                    <p>{modalText}</p>
                    <button onClick={() => {
                        if(btnText) {
                            submitOrder()
                        }else {
                            dispatch(preOrder())
                        }
                    }}>{btnText ? "Забронировать" : "Закрыть"}</button>
                </div>
            </div>
        </div>
    )
}

export default PreOrderModal