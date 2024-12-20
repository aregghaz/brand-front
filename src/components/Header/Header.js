"use client";
import React, { useEffect, useRef, useState, memo, useCallback } from 'react'
import { ArrowDown, BurgerIcon, InfoIcon, LocateIcon, MoreIcon, PhoneIcon, SearchBtnIcon, SearchIcon } from '../../svg'
import Link from 'next/link';
import CallbackModal from "../CallbackModal/CallbackModal"
import SuccsesModal from "../SuccsesModal/SuccsesModal"
import LikedBtn from './LikedBtn/LikedBtn';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import CartBtn from './CartBtn/CartBtn';
import UserBtn from './UserBtn/UserBtn';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import ContactsLink from './ContactsLink/ContactsLink';
import {baseUrl} from "@/utils/fakeUrl";

function Header() {

    const headerRef = useRef(null)
    const [headerToggles, setHeaderToggles] = useState(false)
    const [mobileToggle, setMobileToggle] = useState(false)
    const [mobileSearch, setMobileSearch] = useState(false)

    const headerToggleClick = useCallback((value) => {
        setHeaderToggles(value)
    }, [headerToggles])

    useEffect(() => { }, [headerToggles])

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 60) {
    //             headerRef.current.style.display = "none"
    //             setHeaderToggles(false)
    //         } else {
    //             headerRef.current.style.display = "block"
    //             if (window.innerWidth < 1025) {
    //                 headerRef.current.style.display = "none"
    //             }
    //         }
    //     })
    //     if (window.innerWidth < 1025) {
    //         setMobileSearch(!mobileSearch)
    //     }
    // }, [])

    return (
        <>
            <header className="header">
                <div className="header__top" ref={headerRef}>
                    <div className="header__container _container">
                        <div className="header__nav">
                            <div className="header__dropdown">
                                <div className="header__dropdown-title" onClick={() => headerToggleClick(headerToggles ? null : "abautLinks")}>
                                    <span>О компании</span>
                                    <ArrowDown active={headerToggles === "abautLinks" ? true : false} color={"#3B3B3B"} />
                                </div>
                                {
                                    headerToggles === "abautLinks" &&
                                    <div className="header__dropdown-hide">
                                        <ul>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/about">История компании</Link></li>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/news">Новости </Link></li>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/contacts">Контакты</Link></li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className="header__dropdown info-dropdown">
                                <div className="header__dropdown-title" onClick={() => headerToggleClick(headerToggles ? null : "infoLinks")}>
                                    <InfoIcon color={"#D70000"} />
                                    <span>Информация</span>
                                    <ArrowDown active={headerToggles === "infoLinks" ? true : false} color={"#D70000"} />
                                </div>
                                {
                                    headerToggles === "infoLinks" &&
                                    <div className="header__dropdown-hide">
                                        <ul>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/payment">Продажа и оплата</Link></li>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/buyInstrument">Скупка инструмента</Link></li>
                                            <li><Link onClick={() => setHeaderToggles(null)} href="/terms-of-cooperation">Условия Сотрудничества</Link></li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <ul className="menu">
                                <li><Link href="/category">Каталог</Link></li>
                                <li><Link href="/delivery">Доставка и оплата</Link></li>
                            </ul>
                        </div>
                        <div className="header__contacts">
                            <ContactsLink />
                            <button onClick={() => setHeaderToggles("callback")}>
                                <MoreIcon />
                            </button>
                            {
                                headerToggles === "callback" && <CallbackModal succsesClick={headerToggleClick} {...{ headerToggles }} />
                            }
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__container _container">
                        <div className="header__left">
                            <button className='burger-btn' onClick={() => setMobileToggle(true)}>
                                <BurgerIcon />
                            </button>
                            <HeaderMobile {...{ mobileToggle, setMobileToggle, headerToggles, headerToggleClick }} />
                            <Link href="/" className="logo">
                                <img src={`${baseUrl}/img/logo-i-gray-262x97 1 (1).png`} alt={'brand-instrument'} className='logo1' />
                                <img src={`${baseUrl}/img/logo-i-gray-262x97 2@2x.png`} alt={'brand-instrument'} className='logo2' />
                            </Link>
                            <button className="catalog-btn" onClick={() => headerToggleClick(headerToggles ? null : "catalogLinks")}>
                                <BurgerIcon />
                                Каталог
                            </button>
                            {
                                headerToggles === "catalogLinks" && (
                                    <CategoryMenu {...{ headerToggleClick }} />
                                )
                            }
                        </div>
                        <HeaderSearch {...{ headerToggles, setHeaderToggles, headerToggleClick, mobileSearch, setMobileSearch }} />
                        <div className="header__user">
                            <button onClick={() => setMobileSearch(!mobileSearch)}>
                                <SearchBtnIcon />
                            </button>
                            <LikedBtn />
                            <CartBtn />
                            <UserBtn />
                        </div>
                    </div>
                </div>

            </header>
            {
                headerToggles === "succes" && (
                    <SuccsesModal succsesClick={headerToggleClick} title={"Ваш запрос принят!"} />
                )
            }
            {
                typeof window !== 'undefined' && window.innerWidth < 1025 &&
                headerToggles === "callbackMobile" && <CallbackModal succsesClick={headerToggleClick} {...{ headerToggles }} />
            }
        </>
    )
}

export default memo(Header)