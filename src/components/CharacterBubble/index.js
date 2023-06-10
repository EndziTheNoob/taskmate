import { useEffect, useState } from 'react';
import { BubbleContainer, BubbleContent } from './styled';
import { LoadUserName } from '@/services/user';

export default function Speaking({ type }) {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(LoadUserName());
  }, []);

  useEffect(() => {
    fetch(`/api/quotes_${type}`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote.replace('$name', name));
      })
      .catch((error) => console.error(error));
  }, [name, type]);

  const quoteLength = quote.length;
  const dynamicHeight = quoteLength * 1;

  return (
    <BubbleContainer>
      <BubbleContent style={{ minHeight: `${dynamicHeight}px` }}>
        <p>{quote}</p>
      </BubbleContent>
    </BubbleContainer>
  );
}
