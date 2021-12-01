import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta
            name="description"
            content="静岡県島田市で丁寧に手植えした無農薬米コシヒカリ（精米歩合90%）を使用。一度は途絶えた全国にもめずらしい室町時代からの造り「菩提もと」の日本酒です。"
          />
          <meta property="og:url" content="http://tano.sonodanouen.com" />
          <meta property="og:title" content="菩提もと | 田の" />
          <meta property="og:site_name" content="菩提もと 田の" />
          <meta
            property="og:description"
            content="静岡県島田市で丁寧に手植えした無農薬米コシヒカリ（精米歩合90%）を使用。一度は途絶えた全国にもめずらしい室町時代からの造り「菩提もと」の日本酒です。"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="http://tano.sonodanouen.com/images/tano_og.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&family=Noto+Serif+JP:wght@300;500&family=Sawarabi+Mincho&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="google-site-verification"
            content="n-6aapDV4UeKCSqp7eNwJKBk9kOTL7C2OludVv1_w7U"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
