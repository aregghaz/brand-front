"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers, toggleAddress } from '../../store/slices/users/usersSlice'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { selectCart } from '@/store/slices/cart/cartSlice';
import { useRouter } from 'next/navigation';
import { selectProducts } from '../../store/slices/products/productsSlice';
import { fetchOrders, fetchUser } from '@/store/slices/users/usersApi';
import BasketTable from '../BasketTable/BasketTable';
import SuccsesModal from '../SuccsesModal/SuccsesModal';
import Link from "next/link"
import { fetchCart } from '@/store/slices/cart/cartApi';
import { DetailIcon, PaymentIcon } from '@/svg';
import {fakeUrl} from "@/utils/fakeUrl";

function Checkout() {
    const { usersData, loginData } = useSelector(selectUsers)
    const [getUser, setGetUser] = useState(false)
    const [address, setAddress] = useState(false)
    const { totalPrice, guestUserId } = useSelector(selectCart)
    const [payment, setPayment] = useState(false)
    const [toggleSucces, setToggleSucces] = useState(false)
    const dispatch = useDispatch()
    const [cloneEmail, setCloneEmail] = useState(false)
    const router = useRouter()
    const checkoutRef = useRef(null)
    const validationSchema = yup.object().shape({
        name: yup.string()
            .typeError('Напишите свое имя')
            .min(3, 'Слишком короткое имя')
            .required('Обязательное поле'),
        lastName: yup.string()
            .typeError('Напишите свое отчество')
            .min(3, 'Слишком короткое отчество')
            .required('Обязательное поле'),
        email: yup.string()
            .typeError('Пример: example@mail.ru')
            .email('Недопустимый формат')
            .required('Обязательное поле'),
        phone: yup.string()
            .min(3, 'Слишком короткий номер')
            .matches(/[0-9]/, 'Только цифры')
            .required('Обязательное поле'),
        fatherName: yup.string(),
        city: yup.string().required('Обязательное поле')
    });
    useEffect(() => {
        if (!getUser) {
            if (loginData.access_token) {
                dispatch(fetchUser({ userToken: loginData.access_token }))
            }
            setGetUser(true)
        }
    }, [totalPrice, usersData])
    const succesHandler = useCallback(() => {
        setToggleSucces(false)
    }, [])

    const styleLink = {
        textDecoration: "underline"
    }
    return (
        <>
            <section className="checkout">
                <div className="checkout__container _container" ref={checkoutRef}>
                    <h1>Оформление заказа</h1>
                    <BasketTable />
                    <Formik
                        initialValues={{
                            name: usersData.name,
                            lastName: usersData.lastName,
                            fatherName: usersData.fatherName ? usersData.fatherName : "",
                            phone: usersData.phone,
                            email: usersData.email,
                            created_at: usersData.created_at,
                            company: usersData.company ? usersData.company : "",
                            city: usersData.city ? usersData.city : "",
                            post: usersData.post ? usersData.post : "",
                            country: usersData.country ? usersData.country : "",
                            region: usersData.region ? usersData.region : ""
                        }}
                        onSubmit={async (values, { resetForm }) => {
                            let regData = {}
                            if (usersData.name) {
                                await axios.post(`${fakeUrl}/api/auth/create-order`,
                                    {
                                        cmd: 1,
                                        address_id: address ? usersData.address.filter(el => el.checked === true)[0].id : {
                                            name: values.name,
                                            lastName: values.lastName,
                                            fatherName: values.fatherName,
                                            phone: values.phone,
                                            email: values.email,
                                            created_at: values.created_at,
                                            company: values.company,
                                            address_1: "values.address_1",
                                            address_2: "values.address_2",
                                            country: "values.country",
                                            post: "values.post",
                                            city: values.city,
                                            region: values.region,
                                            total: totalPrice,
                                            user_id: usersData.id,
                                            delivery: 1,
                                            grant_total: totalPrice,
                                            note: ""
                                        }
                                    },
                                    {
                                        headers: {
                                            Authorization: "Bearer " + loginData.access_token,
                                        }
                                    },
                                ).then(res => {
                                    setToggleSucces(res.status === 200 && true)
                                    setTimeout(() => {
                                        dispatch(fetchCart({ userToken: loginData.access_token }))
                                        router.push("/orders")
                                    }, 1900)
                                })
                            } else {
                                await axios.post("${fakeUrl}/api/auth/registration", {
                                    name: values.name,
                                    lastName: values.lastName,
                                    phone: values.phone,
                                    email: values.email,
                                    password: "65654654",
                                    password_confirmation: "65654654",
                                    subscribed: false
                                }).then(res => {
                                    setCloneEmail(false)
                                    regData = { ...res.data }
                                }).catch(res => {
                                    if (res.response.data.error.email) {
                                        setCloneEmail(true)
                                        window.scrollTo(checkoutRef.current.offsetTop, 0);
                                    }
                                })
                                if (regData.access_token) {
                                    dispatch(logIn({ loginData: regData, save: true }))
                                    dispatch(fetchUser({ userToken: regData.access_token }))
                                    await axios.post(`${fakeUrl}/api/auth/create-order`,
                                        {
                                            cmd: usersData.name ? 1 : 2,
                                            uuId: guestUserId,
                                            address_id: {
                                                name: values.name,
                                                lastName: values.lastName,
                                                fatherName: values.fatherName,
                                                phone: values.phone,
                                                email: values.email,
                                                created_at: values.created_at,
                                                company: values.company,
                                                address_1: "values.address_1",
                                                address_2: "values.address_2",
                                                country: "values.country",
                                                post: "values.post",
                                                city: values.city,
                                                region: values.region,
                                                total: totalPrice,
                                                user_id: usersData.id,
                                                delivery: 1,
                                                grant_total: totalPrice,
                                                note: ""
                                            }
                                        },
                                        {
                                            headers: {
                                                Authorization: "Bearer " + regData.access_token,
                                            }
                                        },
                                    ).then(res => {
                                        setToggleSucces(res.status === 200 && true)
                                        dispatch(fetchOrders({ userToken: regData.access_token, limit: 20, page: 1 }))
                                        setTimeout(() => {
                                            dispatch(fetchCart({ userToken: regData.access_token }))
                                            router.push("/orders")
                                        }, 1900)
                                    })
                                }
                            }
                            resetForm();
                        }}
                        validateOnBlur
                        validationSchema={address ? null : validationSchema}
                    >{({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                        <Form autoComplete="off" onSubmit={handleSubmit} className='checkout__form'>
                            <div className="checkout__form-left">
                                <div className="checkout__select">
                                    <div className="checkout__select-item">
                                        <div className="title">
                                            <PaymentIcon />
                                            <p>Способ оплаты</p>
                                        </div>
                                        <label className="checkbox" onClick={() => setPayment(true)}>
                                            <input type="checkbox" checked={payment ? true : false}/>
                                            <span />
                                            <p>Наличными при получении</p>
                                        </label>
                                        <label className="checkbox" onClick={() => setPayment(false)}>
                                            <input type="checkbox" checked={payment ? false : true} defaultChecked={true} />
                                            <span />
                                            <p>Робокасса</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__right">
                                <h2>
                                    <DetailIcon />
                                    Детали заказа
                                </h2>
                                {
                                    !usersData.name && (
                                        <div className='user-buttons'>
                                            <Link href="/login">Вход /</Link>
                                            <Link href="/registration"> Регистрация</Link>
                                        </div>
                                    )
                                }
                                {
                                    // usersData.address?.length ?
                                    //     <>
                                    //         <label className="checkbox" onClick={() => { setAddress(true) }}>
                                    //             <input type="checkbox" checked={address ? true : false} />
                                    //             <span />
                                    //             <p>Я хочу использовать существующий адрес</p>
                                    //         </label>
                                    //         {
                                    //             address ?
                                    //                 usersData.address.map(el => (
                                    //                     <label className="checkbox address-checkbox" key={el.id} onClick={() => dispatch(toggleAddress({ id: el.id }))}>
                                    //                         <input type="checkbox" checked={el.checked} />
                                    //                         <span />
                                    //                         <p>{el.name}, {el.address_1} {el.phone} </p>
                                    //                     </label>
                                    //                 )) : ""
                                    //         }
                                    //     </>
                                    //     : ""
                                }
                                {/* <label className="checkbox" onClick={() => setAddress(false)}>
                                    <input type="checkbox" checked={address ? false : true} />
                                    <span />
                                    <p>{usersData.name ? "Я хочу использовать новый адрес" : "Новый покупатель"}</p>
                                </label> */}
                                {
                                    address ? "" :
                                        <div className="checkout__newadres">
                                            <label className="input-text">Фамилия *<Field type="text" className="input" placeholder="Иванов" name="lastName" defaultValue={usersData.lastName} autoComplete="off" style={{ borderColor: errors.lastName && touched.lastName ? 'red' : '#EDEDED' }} onChange={handleChange} onBlur={handleBlur} /></label>
                                            <label className="input-text">Имя *<Field type="text" className="input" placeholder="Иван" name="name" defaultValue={usersData.name} autoComplete="off" style={{ borderColor: errors.name && touched.name ? 'red' : '#EDEDED' }} onChange={handleChange} onBlur={handleBlur} /></label>
                                            <label className="input-text">Отчество<Field type="text" className="input" placeholder="Иванович" autoComplete="off" name="fatherName" style={{ borderColor: errors.fatherName && touched.fatherName ? 'red' : '#EDEDED' }} onChange={handleChange} onBlur={handleBlur} /></label>
                                            <label className="input-text" style={{ color: cloneEmail ? "red" : "rgba(51, 51, 51, 0.6)" }}>
                                                {cloneEmail ? "Данный E-Mail уже зарегистрирован!" : "Эл. адрес *"}
                                                <Field
                                                    type="text"
                                                    className="input"
                                                    placeholder="ivan.ivanovich@gmail.com"
                                                    defaultValue={usersData.email}
                                                    name="email"
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.email && touched.email || cloneEmail ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </label>
                                            <label className="input-text">Телефон *<InputMask type="text" mask="+7 (999) 999-99-99" className="input" placeholder="+791 502 31111" defaultValue={usersData.phone} name="phone" autoComplete="off" style={{ borderColor: errors.phone && touched.phone ? 'red' : '#EDEDED' }} onChange={handleChange} onBlur={handleBlur} /></label>
                                            <label className="input-text">Город *<Field type="text" className="input" placeholder="Город" defaultValue={usersData.city && usersData.city} name="city" autoComplete="off" style={{ borderColor: errors.city && touched.city ? 'red' : '#EDEDED' }} onChange={handleChange} onBlur={handleBlur} /></label>
                                        </div>
                                }
                                <label className="input-text">примечания
                                    <textarea cols={30} rows={10} className="input textarea" defaultValue={""} />
                                </label>
                                <div className="checkout__instructions">
                                    <h4>Инструкция</h4>
                                    <p>Получатель платежа:
                                        <span>БРЕНД-Инструмент</span>
                                    </p>
                                    <p>Прием платежей по адресу:
                                        <span>Москва, Рязанский проспект, д.30, корп.2.ТЦ «Рязанский», цокольный этаж.</span>
                                    </p>
                                </div>
                                <div className="checkout__total">
                                    <h4>Общая сумма к оплате</h4>
                                    <p>Сумма:
                                        <span>{totalPrice} ₽</span>
                                    </p>
                                    <p>Итого:
                                        <span>{totalPrice} ₽</span>
                                    </p>
                                </div>
                                <label className="input-btn">
                                    <input type="submit" value="Оформить заказ" className="input" />
                                </label>
                            </div>
                        </Form>
                    )}
                    </Formik>-2
                </div>
            </section>

            {toggleSucces && <SuccsesModal
                succsesClick={succesHandler}
                html={true}
                time={4000}
                title={'Ваш заказ принят! История заказа находится в <Link  href="/orders/"><a href="">Личном кабинете</a></Link> . Для просмотра истории, перейдите по ссылке История заказов. Если у Вас возникли вопросы, пожалуйста свяжитесь с нами. Спасибо за покупки в нашем интернет-магазине!'}
            />}
        </>

    )
}

export default Checkout