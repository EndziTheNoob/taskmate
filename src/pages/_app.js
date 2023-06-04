import '@/styles/globals.css';
import Footer from './Footer.jsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
