"use client"
import React, { useEffect, useRef } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, toggleSearchValue } from '@/store/slices/search/searchSlice'
import { fetchSearch } from '@/store/slices/search/searchApi'

function Search() {

  const dispatch = useDispatch()
  const searchRef = useRef(null)
  const { searchProductsData, searchValue } = useSelector(selectSearch)

  const searchSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSearch({ value: searchRef.current[0].value }))
    dispatch(toggleSearchValue(searchRef.current[0].value))
  }

  useEffect(() => {}, [searchProductsData])

  return (
    <section className='search-page'>
      <div className='search-page__container _container'>
        <h1>Поиск - {searchValue}</h1>
        <form className='search-page__form' ref={searchRef} onSubmit={searchSubmit}>
          <label className='input-text'>
            <input type="text" placeholder="Поиск по товарам..." className="input" defaultValue={searchValue} onInput={(e) => {
              searchSubmit(e)
            }} />
          </label>
          <label className='input-btn'>
            <input type="submit" value="Поиск" className="input" />
          </label>
        </form>
        <div className='search-page__grid'>
          {
            searchProductsData?.map(product => (
              <ProductItem title={product.title} img={product.image && `https://back.brend-instrument.ru/${product.image}`} price={product.price} salePrice={product.special_price === 0 ? false : product.special_price} id={product.id} slug={product.slug} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Search