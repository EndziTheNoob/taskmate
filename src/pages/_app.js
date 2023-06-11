import Footer from '@/components/Footer';
import { GlobalStyles } from '@/styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
