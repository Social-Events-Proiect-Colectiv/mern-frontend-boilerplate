import { Html, Head, Main, NextScript } from 'next/document'
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("mdb-react-ui-kit"),
  { ssr: false }
);

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}