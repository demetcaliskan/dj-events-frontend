import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>

            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the Hottest Parties',
    description: 'Find the latests DJ and other musical events'
}
