import React, { memo, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchAddToCart, fetchCart } from '../../store/slices/cart/cartApi';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { fetchSingleProduct } from '../../store/slices/products/productsApi';
import { fetchLikedAdd, fetchLikedRemove } from '../../store/slices/liked/likedApi';
import { BasketIcon, BronIcon, ComprasionIcon, LikeIcon, RemoveWishListIcon } from '../../svg';
import { selectLiked } from '../../store/slices/liked/likedSlice';
import { preOrder } from '../../store/slices/products/productsSlice';
import { selectCart } from '../../store/slices/cart/cartSlice';
import { useRouter } from 'next/router';

function ProductItem({ title, img, price, salePrice, id, slug, total, book }) {
    const dispatch = useDispatch();
    const addRef = useRef(null);
    const [startAnim, setStartAnim] = useState(false);
    const router = useRouter();
    const { loginData } = useSelector(selectUsers);
    const { uuId } = useSelector(selectLiked)
    const { guestUserId } = useSelector(selectCart)

    const addToCart = useCallback(() => {
        dispatch(fetchAddToCart({ productCount: "1", productId: id, userToken: loginData.access_token ? loginData.access_token : null, guestUserId: guestUserId }));
        setStartAnim(true);
        setTimeout(() => {
            setStartAnim(false);
        }, 1000);
    }, [guestUserId]);

    const addToWishList = useCallback(() => {
        dispatch(fetchLikedAdd({ userToken: loginData.access_token, productId: id, guestUserId: uuId ? uuId : false }));
        setStartAnim(true);
        setTimeout(() => {
            setStartAnim(false);
        }, 1000);
        console.log(total > book.length);
    }, [uuId]);
    return (
        <>

            <div className="product-item">
                <Link href={`/product/${slug}`} style={{ backgroundImage: img && "url(" + img + ")" }} className="product-item__img" onClick={() => { dispatch(fetchSingleProduct({ slug })) }} scroll={false}>
                    {salePrice > 0 && <div
                        className="discount_div">- {(100 - (salePrice * 100) / price)} %</div>}
                    <img src={img} alt={title} />
                </Link>
                <div className="product-item__text">
                    <h4>
                        <Link href={`/product/${slug}`} onClick={() => { dispatch(fetchSingleProduct({ slug })) }} scroll={false} title={title}>{title}</Link>
                    </h4>
                    <div className="product-item__prices">
                        {salePrice ? (
                            <>
                                <p>{salePrice} ₽</p>
                                <span>{price} ₽</span>
                            </>
                        ) : (
                            <p>{price} ₽</p>
                        )}
                    </div>
                    <Link href="/" className="credit-btn">Оформить кредит в магазине!</Link>
                    <div className="product-item__buttons">
                        <button onClick={addToCart} className="buy-btn" disabled={book?.length >= total ? true : false} style={{ maxWidth: book?.length >= total && "unset", backgroundColor: book?.length >= total && "#939393" }}>
                            {
                                book?.length >= total ? "Забронировано" :
                                    <>
                                        <BasketIcon color={"#FFF"} />
                                        Купить
                                        {startAnim && <span className="product-item__animate" ref={addRef}>1</span>}
                                    </>
                            }
                        </button>
                        {router.pathname !== "/liked" ? (
                            <button className="like-btn" onClick={addToWishList}>
                                <LikeIcon />
                            </button>
                        ) : (
                            <button className="like-btn" onClick={() => { dispatch(fetchLikedRemove({ userToken: loginData.access_token, productId: id, guestUserId: uuId })) }}>
                                <RemoveWishListIcon />
                            </button>
                        )}
                        {
                            book?.length >= total ? "" :
                                <button className='preorder-btn' onClick={() => {
                                    if (loginData.access_token) {
                                        dispatch(preOrder({ id: id, price: salePrice ? salePrice : price, name: title, toggle: true }))
                                    } else {
                                        router.push("/login")
                                    }
                                }}>
                                    <BronIcon />
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ProductItem);
