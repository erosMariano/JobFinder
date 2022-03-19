import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#1a1a1a" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />

                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta name="keywords" content="Keywords" />

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/icons/icon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    href="/icons/icon-512x512.png"
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                />
                <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
                <meta name="theme-color" content="#1a1a1a" />

                <meta name="description" content="Plataforma para encontrar o próximo emprego como Designer" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}