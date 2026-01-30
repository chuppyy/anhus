import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/*<script defer src="https://videoadstech.org/ads/anhus_livextop_com.974c98a8-3d82-43b5-abe5-429a5345fb2b.video.js"></script>
        <script async src="https://server.adhub.media/ads/anhus_livextop_com.4a3f4e8c-a8d5-4056-a2d3-68d8a9afaf39.display.js"></script>*/}
        <script defer src="https://videoadstech.org/ads/anhus_daily24_blog.88dfa97d-31cc-4294-b247-9af265543343.video.js"></script>
        <script async src="https://server.adhub.media/ads/anhus_daily24_blog.80d33374-7854-4850-92e1-f725ed778c04.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
