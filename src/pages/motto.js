import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Clouds, CloudsContainer, QuoteStyle } from '../styles/Motto.js';
import Header from '@/components/Header/index.js';

export default function Motto() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.quotable.io/quotes/random?tags=motivational,inspirational',
    )
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].content);
        setAuthor(data[0].author);
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
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CloudsContainer>
          <Clouds
            src="/img/clouds.png"
            alt="clouds"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <QuoteStyle style={{ minHeight: `${dynamicHeight}px` }}>
            <p>{quote}</p>
            <p>- {author}</p>
          </QuoteStyle>
        </CloudsContainer>
      </div>
    </>
  );
}
