import { useEffect, useState } from 'react';
import Menu from '../components/Menu/index.js';
import Head from 'next/head';
import { Clouds, CloudsContainer, QuoteStyle } from '../styles/Motto.js';

export default function Motto() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.goprogram.ai/inspiration')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const quoteLength = quote.length;
  const dynamicHeight = quoteLength * 1;

  return (
    <>
      <Head>
        <title>Motto</title>
      </Head>
      <div>
        <nav>
          <Menu />
        </nav>
        <CloudsContainer>
          <Clouds src="/img/Clouds.png" alt="clouds" />
          <QuoteStyle style={{ minHeight: `${dynamicHeight}px` }}>
            <p>{quote}</p>
            <p>- {author}</p>
          </QuoteStyle>
        </CloudsContainer>
      </div>
    </>
  );
}
