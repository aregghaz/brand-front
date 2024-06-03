import Brendcrumbs from "@/components/Brendcrumbs/Brendcrumbs";
import TermsOfCooperation from "@/components/TermsOfCooperation/TermsOfCooperation";
import Head from 'next/head';

export default function Page () {
    return (
        <>
            <Head>
                <title>Условия сотрудничества</title>
                <meta name="description" content="«Бренд-Инструмент» – это платформа, которая занимается скупкой и продажей строительного
                        оборудования, инструментов, которые ранее уже были в употреблении, а также нового. Этот сервис –
                        лучший помощник для людей, которые хотят провести строительные или ремонтные работы без лишних
                        затрат, поэтому отдают предпочтение приобретению электроинструментов б/у. Такие покупки помогут
                        не просто получить необходимый инвентарь для работы, но еще и существенно сэкономить." />
            </Head>
            <Brendcrumbs title={"Условия сотрудничества"} />
            <TermsOfCooperation />
        </>
    )
}