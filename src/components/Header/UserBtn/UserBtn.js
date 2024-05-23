"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../../store/slices/users/usersSlice'
import Link from 'next/link'
import { UserIcon } from '../../../svg'

function UserBtn() {
  const {usersData, loginData} = useSelector(selectUsers)
  const [userName, setUserName] = useState(null)
  useEffect(() => {
  }, [usersData,loginData])
  return (
    <>
      {
        usersData.name ?
          <Link href={"/personalRoom"}>
            <UserIcon />
            <span>{usersData?.name}</span>
          </Link> :
          <Link href="/login">
            <UserIcon />
            <span>Войти</span>
          </Link>
      }
    </>
  )
}

export default UserBtn