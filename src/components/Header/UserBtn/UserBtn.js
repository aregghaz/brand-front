"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../../store/slices/users/usersSlice'
import Link from 'next/link'
import { UserIcon } from '../../../svg'

function UserBtn() {
  const {usersData} = useSelector(selectUsers)
  const [userName, setUserName] = useState(null)
  useEffect(() => {
    if(usersData.name) {
      setUserName(usersData.name)
    }
  }, [usersData])
  return (
    <>
      {
        userName ?
          <Link href={"/personalRoom"}>
            <UserIcon />
            <span>{userName}</span>
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