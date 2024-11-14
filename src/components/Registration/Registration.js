"use client"
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/slices/users/usersApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { logIn } from '@/store/slices/users/usersSlice';

function Registration() {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState(false)
    const router = useRouter()
    const validationSchema = yup.object().shape({
        name: yup.string()
            .required(),
        lastName: yup.string()
            .required(),
        email: yup.string()
            .email()
            .required(),
        password: yup.string()
            .typeError('Must be a string')
            .min(3, 'Короткий пароль')
            .matches(/[0-9]/, 'Пароль должен содержать цифру')
            .required('Обязательное поле'),
        confirmPassword: yup.string()
            .typeError('Must be a string')
            .oneOf([yup.ref('password')], 'Пожалуйста, введите правильный пароль')
            .required('Обязательное поле'),
        phone: yup.string()
            .required(),
    });

    return (
        <section className='registration'>
            <div className='registration__container _container'>
                <div className='registration__img'>
                    <img src="https://brend-instrument.ru/img/r9 2.png" alt="img" width={658} height={632} />
                </div>
                <div className='registration__right'>
                    <h1>Регистрация</h1>
                    <Formik
                        initialValues={{
                            name: "",
                            lastName: "",
                            fatherName: "",
                            password: "",
                            confirmPassword: "",
                            phone: "",
                            email: ""
                            // Другие поля ввода...
                        }}
                        onSubmit={async (values, { resetForm }) => {

                            await axios.post("http://api.calcarela.com/api/auth/registration", {
                                name: values.name,
                                lastName: values.lastName,
                                fatherName: values.fatherName,
                                phone: values.phone,
                                email: values.email,
                                password: values.password,
                                password_confirmation: values.confirmPassword,
                                subscribed: false
                            }).then(({data: regData}) => {
                                dispatch(logIn({ loginData: {...regData}, save: false }))
                                dispatch(fetchUser({userToken: regData.access_token}))
                                router.push("/")
                                resetForm();
                            }).catch(({ response: res }) => {
                                setErrorMessage(true)
                            })
                        }}
                        validateOnBlur
                        validationSchema={validationSchema}
                    >{({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                        <Form autoComplete="off" className='registration__form' onSubmit={handleSubmit}>
                            {
                                errorMessage &&
                                <p className='error-message'>
                                    Электронный адрес уже существует. Попробуйте другой адрес или <Link href="/rememberPass">восстановите пароль</Link>.
                                </p>
                            }   
                            <div className='flex'>
                                <label className='input-text'>Фамилия *
                                    <Field type="text" className="input" name="lastName" autoComplete="off" style={{ borderColor: errors.lastName && touched.lastName ? 'red' : 'inherit' }}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </label>
                                <label className='input-text'>Имя *
                                    <Field type="text" className="input" name="name" autoComplete="off" style={{ borderColor: errors.name && touched.name ? 'red' : 'inherit' }} onChange={handleChange} onBlur={handleBlur} />
                                </label>
                            </div>
                            <label className='input-text'>Отчество *
                                <Field type="text" className="input" name="fatherName" autoComplete="off" style={{ borderColor: errors.fatherName && touched.fatherName ? 'red' : 'inherit' }}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </label>
                            <label className='input-text'>введите эл. адрес *
                                <Field type="email" className="input" name="email" autoComplete="off" inputProps={{ autoCapitalize: "off" }} style={{ borderColor: errors.email && touched.email ? 'red' : 'inherit' }}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </label>
                            <label className='input-text'>Телефон *
                                <InputMask
                                    mask="+7 (999) 999-99-99"
                                    maskChar={null}
                                    type="text"
                                    name="phone"
                                    className="input"
                                    autoComplete="off"
                                    style={{ borderColor: errors.phone && touched.phone ? 'red' : 'inherit' }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </label>
                            <label className='input-text'>пароль *
                                <Field type="password" className="input" name="password" autoComplete="off" style={{ borderColor: errors.password && touched.password ? 'red' : 'inherit' }}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </label>
                            <label className='input-text'>Повторите пароль *
                                <Field type="password" className="input" name="confirmPassword" autoComplete="off" style={{ borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inherit' }}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </label>
                            <label className="input-btn"><input type="submit" value="Регистрация" className="input" /></label>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default Registration;
