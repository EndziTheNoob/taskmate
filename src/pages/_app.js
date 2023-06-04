import '@/styles/globals.css';
import Footer from '../components/Footer/Footer.jsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
