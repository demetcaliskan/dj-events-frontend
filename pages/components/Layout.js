import Head from 'next/head'

export default function Layout({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the Hottest Parties',
    description: 'Find the latests DJ and other musical events'
}
