import Head from 'next/head';
import Link from 'next/link';

const layout = ({title,description = '',children}) => {
    return (<>
        <Head>
            <title>{title} || Simple Blog</title>
            <meta name='description' content={description || 'Простой блог на Next.js'}></meta>
            <meta property='og:description' content={description || 'Простой блог на Next.js'}></meta>
            <description></description>
        </Head>
        <header>
        <Link href="/">
                <a>Главная</a>
            </Link>
            <img src="/desktop-computer.png"></img>
        </header>

        <div className='container'>{children}</div>
        <footer>2022 &copy; Simple blog Next.js</footer>



        </>
    );
}

export default layout;