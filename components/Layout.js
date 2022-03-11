import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({ title, description, children }) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the Hottest Parties',
    description: 'Find the latests DJ and other musical events'
}
