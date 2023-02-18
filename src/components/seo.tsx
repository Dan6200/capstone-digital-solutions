import Head from 'next/head'
import seoConfig from '../seo-config'

export default function SEO({ description, title }) {
    const siteTitle = seoConfig.title

    return (
        <Head>
            <title>{`${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            {/*
            <meta property="twitter:card" content="summary" />
            <meta
                property="twitter:creator"
                content={seoConfig.social.twitter}
            />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
		  */}
        </Head>
    )
}
