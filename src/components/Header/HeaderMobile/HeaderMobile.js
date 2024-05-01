"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ArrowDown, BurgerBtn, ClousIcon, DubbleArrowRightIcon, InfoIcon, UserIcon } from '../../../svg'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { useSelector } from 'react-redux'
import { selectUsers } from '@/store/slices/users/usersSlice'

function HeaderMobile({ mobileToggle, headerToggles, setMobileToggle, headerToggleClick }) {

  const [toggleCtalog, setToggleCatalog] = useState(false)
  const {usersData} = useSelector(selectUsers)

  useEffect(() => {}, [usersData])

  return (
    <>
      {
        mobileToggle ?
          <div className='header__mobile'>
            <div className='header__mobile-container'>
              <div className='header__mobile-title'>
                <Link href="/" className="mobile-logo" onClick={() => {headerToggleClick(null); setMobileToggle(false)}}>
                  <img src="https://brend-instrument.ru/img/logo-i-gray-262x97 1 (1).png" alt={'asd'} />
                </Link>
                <button onClick={() => setMobileToggle(false)}>
                  <ClousIcon />
                </button>
              </div>
              <div className='header__mobile-user'>
                <UserIcon />
                {
                  usersData.id ? (
                    <>
                      <Link href={"/personalRoom"} onClick={() => {headerToggleClick(null); setMobileToggle(false)}}>{usersData.name} {usersData.lastName}</Link>
                    </>
                  ) : (
                    <>
                      <Link href={"/login"} onClick={() => {headerToggleClick(null); setMobileToggle(false)}}>Вход / </Link>
                      <Link href={"/registration"} onClick={() => {headerToggleClick(null); setMobileToggle(false)}}> Регистрация</Link>
                    </>
                  )
                }
              </div>
              <div className='header__mobile-catalog'>
                <button className='opencatalog' onClick={() => setToggleCatalog(!toggleCtalog)}>
                  <span>
                    <BurgerBtn />
                    Каталог
                  </span>
                  <DubbleArrowRightIcon />
                </button>
              </div>
              {
                toggleCtalog ? "" : <CategoryMenu {...{mobileToggle, headerToggles, setMobileToggle, headerToggleClick}} />
              }
              <ul className='mobile-menu'>
                <li>
                  <Link onClick={() => headerToggleClick(headerToggles ? null : "abautLinks")} href="#">О компании <ArrowDown active={headerToggles === "abautLinks" ? true : false} color={"#3B3B3B"} /></Link>
                  {
                    headerToggles === "abautLinks" ?
                      <ul>
                        <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/about">История компании</Link></li>
                        <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/news">Новости </Link></li>
                        <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/contacts">Контакты</Link></li>
                      </ul> : ""
                  }
                </li>
                <li>
                  <Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/delivery">Доставка и оплата</Link>
                </li>
                <li>
                  <Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/sale">Акции</Link>
                </li>
                <li>
                  <Link onClick={() => headerToggleClick(headerToggles ? null : "infoLinks")} href="/" className='info-link'>
                    <InfoIcon color={"#D70000"} />
                    Информация
                    <ArrowDown active={headerToggles === "infoLinks" ? true : false} color={"#D70000"} />
                  </Link>
                  {
                    headerToggles === "infoLinks" ?
                      <ul>
                        <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/payment">Продажа и оплата</Link></li>
                        <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/buyInstrument">Скупка инструмента</Link></li>
                        {/* <li><Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/">Условия Сотрудничества</Link></li> */}
                      </ul> : ""
                  }
                </li>
                <li>
                  <Link onClick={() => {headerToggleClick(null); setMobileToggle(false)}} href="/contacts">Контакты</Link>
                </li>
              </ul>
              <div className='callback-btn'>
                <button onClick={() => {headerToggleClick("callbackMobile"); setMobileToggle(false)}}>Заказать звонок</button>
              </div>
            </div>
          </div> : <></>
      }
    </>
  )
}

export default HeaderMobile