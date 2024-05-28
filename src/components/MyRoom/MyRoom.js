import React, { useEffect, useRef, useState } from 'react'
import MyRoomMenu from '../MyRoomMenu/MyRoomMenu'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Loader from '../Loader/Loader'
import { Form, Formik } from 'formik';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
// import InputMask from 'react-input-mask';
import axios from 'axios';
import { PenIcon } from '../../svg'
import { fetchUser } from '../../store/slices/users/usersApi'
import SuccsesModal from '../SuccsesModal/SuccsesModal'
import { useRouter } from 'next/router'

function MyRoom() {
    const { usersData, loginData } = useSelector(selectUsers)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const phoneRef = useRef(null);

    useEffect(() => {
        if (!usersData?.name) {
            router.push("/")
        }
    }, [loginData]);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Обязательное поле'),
        lastName: yup.string().required('Обязательное поле'),
        email: yup.string().email('Недопустимый формат').required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        fatherName: yup.string(),
        city: yup.string(),
        created_at: yup.string(),
        password: yup.string().required()
    });

    return (
        <>
            <section className="myroom">
                <div className="myroom__container _container">
                    <h1>Личный Кабинет</h1>
                    <div className="myroom__flex">
                        <MyRoomMenu />
                        <div className="myroom__right">
                            <h2>Ваша учетная запись</h2>
                            <Formik
                                initialValues={{
                                    name: usersData.name,
                                    lastName: usersData.lastName,
                                    fatherName: usersData.fatherName,
                                    phone: usersData.phone,
                                    email: usersData.email,
                                    created_at: usersData.created_at,
                                    city: usersData.city,
                                    password: ""
                                }}
                                onSubmit={async (values, { resetForm }) => {
                                    try {
                                        await axios.post(
                                            `https://back.brend-instrument.ru/api/auth/update/${usersData.id}`,
                                            {
                                                name: values.name,
                                                lastName: values.lastName,
                                                fatherName: values.fatherName,
                                                phone: values.phone,
                                                email: values.email,
                                                password: values.password,
                                                password_confirmation: values.pass,
                                                city: values.city,
                                            },
                                            {
                                                headers: {
                                                    Authorization: "Bearer " + loginData.access_token,
                                                },
                                            }
                                        )
                                        dispatch(fetchUser({ userToken: loginData.access_token }))
                                        setSuccess(true)
                                        resetForm();
                                    } catch (error) {
                                        console.error(error);
                                        // Добавьте обработку ошибок
                                    }
                                }}
                                validateOnBlur
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form autoComplete="off" onSubmit={handleSubmit}>
                                        <div className="myroom__grid">
                                            <label className="input-text">Фамилия *
                                                <input type="text" className="input"
                                                    placeholder="Иванов"
                                                    name="lastName"
                                                    defaultValue={values.lastName}
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.lastName && touched.lastName ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                            <label className="input-text">Имя *
                                                <input type="text" className="input"
                                                    placeholder="Иван" name="name"
                                                    defaultValue={values.name}
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.name && touched.name ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                            <label className="input-text">Отчество
                                                <input type="text" className="input"
                                                    placeholder="Иванович"
                                                    defaultValue={values.fatherName}
                                                    autoComplete="off"
                                                    name="fatherName"
                                                    style={{ borderColor: errors.fatherName && touched.fatherName ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                            <label className="input-text">Эл. адрес *
                                                <input type="text"
                                                    className="input"
                                                    disabled={true}
                                                    placeholder="ivan.ivanovich@gmail.com"
                                                    defaultValue={values.email}
                                                    name="email"
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.email && touched.email ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                            <label className="input-text">Телефон *
                                                <InputMask
                                                    ref={phoneRef}
                                                    mask="+7 (999) 999-99-99"
                                                    maskChar={null}
                                                    type="text"
                                                    name="phone"
                                                    className="input"
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.phone && touched.phone ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    defaultValue={values.phone}
                                                />
                                            </label>
                                            <label className="input-text">Город *
                                                <input type="text" className="input"
                                                    placeholder="Город"
                                                    defaultValue={values.city}
                                                    name="city" autoComplete="off"
                                                    style={{ borderColor: errors.city && touched.city ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                            <label className="input-text">Пароль *
                                                <input type="password"
                                                    className="input"
                                                    placeholder="Пароль"
                                                    defaultValue={values.password}
                                                    value={values.password}
                                                    name="password"
                                                    autoComplete="off"
                                                    style={{ borderColor: errors.password && touched.password ? 'red' : '#EDEDED' }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                            </label>
                                        </div>
                                        <label className="input-btn">
                                            <button className="input" type='submit'>
                                                <PenIcon />
                                                Изменить мою информацию
                                            </button>
                                        </label>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
            {success && (
                <SuccsesModal title={"Ваши данные успешно изменены!"} succsesClick={setSuccess} />
            )}
        </>
    )
}

export default MyRoom
