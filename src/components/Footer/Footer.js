"use client"
import Link from 'next/link'
import React, { useCallback, useRef, useState } from 'react'
import { LocateIcon, PhoneIcon, TikTokIcon, VkIcon, WpIcon, YoutubeIcon } from '../../svg'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../store/slices/contacts/contactsSlice'
import SuccsesModal from '../SuccsesModal/SuccsesModal'
import axios from 'axios'
import {baseUrl} from "@/utils/fakeUrl";

function Footer() {
    const { contactsData } = useSelector(selectContacts)
    const [errorMail, setErrorMail] = useState(false)
    const [toggleSuccses, setToggleSuccses] = useState(false)
    const subscribeRef = useRef(null)

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const subscribeSubmit = async (e) => {
        e.preventDefault()

        const [{ value: mail },] = subscribeRef.current

        await axios.get(`http://api.calcarela.com/api/subscription/${mail}`).then(res => {
            if (res.status === 200) {
                setToggleSuccses(true)
            }
        })
    }
    const handleEmailChange = (e) => {
        const { value } = e.target;
        setErrorMail(!validateEmail(value))
    }
    const toggleSuccsesHandler = useCallback(() => { setToggleSuccses(false) }, [])
    return (
        <>
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__container _container">
                        <div className="footer__abaut">
                            <Link href="/" className="logo"><img src={`${baseUrl}/img/logo-i-gray-262x97 1 (1).png`} alt="img" width={172} height={70} /></Link>
                            <form ref={subscribeRef} onSubmit={subscribeSubmit}>
                                <h3>Подпишитесь, чтобы быть в курсе!</h3>
                                <label className="input-text"><input type="text" placeholder="Ваша электронная почта" onChange={handleEmailChange} /></label>
                                <label className="input-btn"><input type="submit" defaultValue="Подписаться" /></label>
                            </form>
                        </div>
                        <div className="footer__flex">
                            <div className="footer__item">
                                <h4>Контакты</h4>
                                <ul>
                                    <li>
                                        {contactsData?.address}
                                        {/*<Link href="#"> /!*<LocateIcon />*!/ {contactsData?.address}</Link>*/}
                                    </li>
                                    <li>
                                        {contactsData?.phone_1}
                                        {/*<a href={`tel:${contactsData?.phone_1}`}>/!*<PhoneIcon />*!/</a>*/}
                                    </li>
                                    <li>
                                        {contactsData?.phone_2}
                                        {/*<a href={`tel:${contactsData?.phone_2}`}>/!*<PhoneIcon />*!/ {contactsData?.phone_2}</a>*/}
                                    </li>
                                    <li>
                                        {contactsData?.phone_3}
                                        {/*<a href={`tel:${contactsData?.phone_3}`}>/!*<PhoneIcon />*!/ {contactsData?.phone_3}</a>*/}
                                    </li>
                                    <li>
                                        {contactsData?.whats_up}
                                        {/*<a href={`https://api.whatsapp.com/send?phone=${contactsData?.whats_up}`}>/!*<WpIcon />*!/ {contactsData?.whats_up}</a>*/}
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__item">
                                <h4>Информация</h4>
                                <ul>
                                    <li><Link href="/delivery">Доставка и оплата</Link></li>
                                    <li><Link href="/payment">Продажа и оплата</Link></li>
                                    <li><Link href="/buyInstrument">Скупка инструмента</Link></li>
                                    <li><Link href="/terms-of-cooperation">Условия Сотрудничества</Link></li>
                                </ul>
                            </div>
                            <div className="footer__item">
                                <h4>О компании</h4>
                                <ul>
                                    <li><Link href="/about">История компании</Link></li>
                                    <li><Link href="/news">Новости </Link></li>
                                    <li><Link href="/contacts">Контакты</Link></li>
                                </ul>
                            </div>
                            <div className="footer__item">
                                <h4>Дополнительно</h4>
                                <ul>
                                    <li><Link href="/sale">Акции</Link></li>
                                    <li><Link href="/brands">Бренды</Link></li>
                                    <li><Link href="/">Карта сайта</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__links">
                            <div className="soc">
                                <a target='_blank' href={contactsData?.sub_tiktok}>
                                    <TikTokIcon />
                                </a>
                                <a target='_blank' href={contactsData?.sub_youtube} >
                                    <YoutubeIcon />
                                </a>
                                <a target='_blank' href={contactsData?.sub_vk}>
                                    <VkIcon />
                                </a>
                            </div>
                            <div className="cards">
                                <p>Принимаем к оплате:</p>
                                <img src={`${baseUrl}/img/Group 48096099.png`} alt='cards' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__container _container">
                        <p>© 2024 БРЕНД ИНСТРУМЕНТ</p>
                        <ul>
                            <li><Link href="/terms-of-use">Пользовательское соглашение </Link></li>
                            <li><Link href="/">Карта сайта</Link></li>
                            <li><Link href="/privacy-policy">Политика конфиденциальности</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {toggleSuccses && <SuccsesModal title={"Ваш запрос принят!"} succsesClick={toggleSuccsesHandler} />}
        </>

    )
}

export default Footer