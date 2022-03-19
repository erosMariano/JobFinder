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

                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/icons/icon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/icon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <meta name="theme-color" content="#1a1a1a" />

                <link rel="icon" type="image/png" href="/icons/icon-512x512.png" />
                <meta name="description" content="Plataforma para encontrar o próximo emprego como Designer" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}