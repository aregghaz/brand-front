import React from 'react'
import FaqItem from '../FaqItem/FaqItem'

function Faq() {
    return (
        <section className="faq">
            <div className="faq__container _container">
                <div className="section-title">
                    <h2>Вопросы и ответы</h2>
                </div>
                <div className="faq__box">
                    <FaqItem title={"Какой у вас режим работы?"} desc={"Ежедневно с 09:30 до 20:30 Без выходных и праздничных дней."} />
                    {/* <FaqItem title={"Осуществляете ли вы доставку товара?"} desc={"Доставка осуществляется при заказе товара от 2000 рублей по тарифу транспортной компании."} />
                    <FaqItem title={"Как быстро приедет мой заказ?"} desc={"Доставка осуществляется при заказе товара от 2000 рублей по тарифу транспортной компании."} />
                    <FaqItem title={"Как я могу узнать о состоянии товара?"} desc={"Доставка осуществляется при заказе товара от 2000 рублей по тарифу транспортной компании."} />
                    <FaqItem title={"Если я получу товар, а он не работает?"} desc={"Доставка осуществляется при заказе товара от 2000 рублей по тарифу транспортной компании."} /> */}
                </div>
            </div>
        </section>

    )
}

export default Faq