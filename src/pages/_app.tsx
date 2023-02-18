//cspell:disable
import React, { useEffect } from 'react'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Script from 'next/script'
import Smartlook from 'smartlook-client'

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        Smartlook.init('32e217cba4d136d2735a03cd06194dc0f0dca9a4', {
            region: 'eu',
        })
    }, [])

    return (
        <>
             
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-WKKS5WNT9H"
            />
                
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
						  window.dataLayer = window.dataLayer || [];
						  function gtag(){dataLayer.push(arguments);}
						  gtag('js', new Date());

						  gtag('config', 'G-WKKS5WNT9H');
			        `,
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
